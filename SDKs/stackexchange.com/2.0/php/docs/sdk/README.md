# SDK

## Overview

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


<https://api.stackexchange.com/>
### Available Operations

* [getAccessTokensAccessTokens](#getaccesstokensaccesstokens) - Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [getAccessTokensAccessTokensInvalidate](#getaccesstokensaccesstokensinvalidate) - Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [getAnswers](#getanswers) - Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [getAnswersIds](#getanswersids) - Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [getAnswersIdsComments](#getanswersidscomments) - Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getAppsAccessTokensDeAuthenticate](#getappsaccesstokensdeauthenticate) - Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [getBadges](#getbadges) - Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [getBadgesName](#getbadgesname) - Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [getBadgesRecipients](#getbadgesrecipients) - Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.

* [getBadgesTags](#getbadgestags) - Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [getBadgesIds](#getbadgesids) - Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.

* [getBadgesIdsRecipients](#getbadgesidsrecipients) - Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.

* [getComments](#getcomments) - Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getCommentsIds](#getcommentsids) - Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getErrors](#geterrors) - Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.

* [getErrorsId](#geterrorsid) - This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.

* [getEvents](#getevents) - Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user

  

 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.

* [getFiltersCreate](#getfilterscreate) - Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.

* [getFiltersFilters](#getfiltersfilters) - Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.

* [getInbox](#getinbox) - Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [getInboxUnread](#getinboxunread) - Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [getInfo](#getinfo) - Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.

* [getMe](#getme) - Returns the user associated with the passed access_token.
 
This method returns a user.

* [getMeAnswers](#getmeanswers) - Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.

* [getMeAssociated](#getmeassociated) - Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.

* [getMeBadges](#getmebadges) - Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.

* [getMeComments](#getmecomments) - Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.

* [getMeCommentsToId](#getmecommentstoid) - Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.

* [getMeFavorites](#getmefavorites) - Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.

* [getMeInbox](#getmeinbox) - Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [getMeInboxUnread](#getmeinboxunread) - Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [getMeMentioned](#getmementioned) - Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.

* [getMeMerges](#getmemerges) - Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.

* [getMeNotifications](#getmenotifications) - Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getMeNotificationsUnread](#getmenotificationsunread) - Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getMePrivileges](#getmeprivileges) - Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.

* [getMeQuestions](#getmequestions) - Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.

* [getMeQuestionsFeatured](#getmequestionsfeatured) - Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.

* [getMeQuestionsNoAnswers](#getmequestionsnoanswers) - Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.

* [getMeQuestionsUnaccepted](#getmequestionsunaccepted) - Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.

* [getMeQuestionsUnanswered](#getmequestionsunanswered) - Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.

* [getMeReputation](#getmereputation) - Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.

* [getMeReputationHistory](#getmereputationhistory) - Returns user's public reputation history.
 
This method returns a list of reputation_history.

* [getMeReputationHistoryFull](#getmereputationhistoryfull) - Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.

* [getMeSuggestedEdits](#getmesuggestededits) - Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.

* [getMeTags](#getmetags) - Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.

* [getMeTagsTagsTopAnswers](#getmetagstagstopanswers) - Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.

* [getMeTagsTagsTopQuestions](#getmetagstagstopquestions) - Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.

* [getMeTimeline](#getmetimeline) - Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.

* [getMeTopAnswerTags](#getmetopanswertags) - Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.

* [getMeTopQuestionTags](#getmetopquestiontags) - Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.

* [getMeWritePermissions](#getmewritepermissions) - Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.

* [getNotifications](#getnotifications) - Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getNotificationsUnread](#getnotificationsunread) - Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getPosts](#getposts) - Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.

* [getPostsIds](#getpostsids) - Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.

* [getPostsIdsComments](#getpostsidscomments) - Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getPostsIdsRevisions](#getpostsidsrevisions) - Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.

* [getPostsIdsSuggestedEdits](#getpostsidssuggestededits) - Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.

 
This method returns a list of suggested-edits.

* [getPrivileges](#getprivileges) - Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.

* [getQuestions](#getquestions) - Gets all the questions on the site.
 
This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - hot - by the formula ordering the hot tab Does not accept min or max
 - week - by the formula ordering the week tab Does not accept min or max
 - month - by the formula ordering the month tab Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsFeatured](#getquestionsfeatured) - Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsNoAnswers](#getquestionsnoanswers) - Returns questions which have received no answers.
 
Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
 
This method corresponds roughly with the this site tab.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsUnanswered](#getquestionsunanswered) - Returns questions the site considers to be unanswered.
 
Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
Compare with /questions/no-answers.
 
This method corresponds roughly with the unanswered tab.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsIds](#getquestionsids) - Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsIdsAnswers](#getquestionsidsanswers) - Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [getQuestionsIdsComments](#getquestionsidscomments) - Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getQuestionsIdsLinked](#getquestionsidslinked) - Gets questions which link to those questions identified in {ids}.
 
This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
 
A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsIdsRelated](#getquestionsidsrelated) - Returns questions that the site considers related to those identified in {ids}.
 
The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getQuestionsIdsTimeline](#getquestionsidstimeline) - Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.

* [getRevisionsIds](#getrevisionsids) - Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.

* [getSearch](#getsearch) - Searches a site for any questions which fit the given criteria.
 
This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
 
At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
 
tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getSearchAdvanced](#getsearchadvanced) - Searches a site for any questions which fit the given criteria.
 
Search criteria are expressed using the following parameters:
  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
 - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
 - answers - the minimum number of answers returned questions must have.
 - body - text which must appear in returned questions' bodies.
 - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
 - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
 - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
 - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
 - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
 - title - text which must appear in returned questions' titles.
 - user - the id of the user who must own the questions returned.
 - url - a url which must be contained in a post, may include a wildcard.
 - views - the minimum number of views returned questions must have.
 - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.

  
At least one additional parameter must be set if nottagged is set, for performance reasons.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getSimilar](#getsimilar) - Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
This method is roughly equivalent to a site's related questions suggestion on the ask page.
 
This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
 
Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
 
If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getSites](#getsites) - Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.

* [getSuggestedEdits](#getsuggestededits) - Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [getSuggestedEditsIds](#getsuggestededitsids) - Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.

* [getTags](#gettags) - Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [getTagsModeratorOnly](#gettagsmoderatoronly) - Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [getTagsRequired](#gettagsrequired) - Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [getTagsSynonyms](#gettagssynonyms) - Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag_synonyms.

* [getTagsTagsFaq](#gettagstagsfaq) - Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.

* [getTagsTagsInfo](#gettagstagsinfo) - Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [getTagsTagsRelated](#gettagstagsrelated) - Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.

* [getTagsTagsSynonyms](#gettagstagssynonyms) - Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag synonyms.

* [getTagsTagsWikis](#gettagstagswikis) - Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.

* [getTagsTagTopAnswerersPeriod](#gettagstagtopanswerersperiod) - Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.

* [getTagsTagTopAskersPeriod](#gettagstagtopaskersperiod) - Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.

* [getUsers](#getusers) - Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".

* [getUsersModerators](#getusersmoderators) - Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.

* [getUsersModeratorsElected](#getusersmoderatorselected) - Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.

* [getUsersIds](#getusersids) - Gets the users identified in ids in {ids}.
 
Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.

* [getUsersIdsAnswers](#getusersidsanswers) - Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [getUsersIdsAssociated](#getusersidsassociated) - Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.

* [getUsersIdsBadges](#getusersidsbadges) - Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.

* [getUsersIdsComments](#getusersidscomments) - Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getUsersIdsCommentsToid](#getusersidscommentstoid) - Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getUsersIdsFavorites](#getusersidsfavorites) - Get the questions that users in {ids} have favorited.
 
This method is effectively a view onto a user's favorites tab.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - added - when the user favorited the question
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsMentioned](#getusersidsmentioned) - Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [getUsersIdsMerges](#getusersidsmerges) - Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.

* [getUsersIdsQuestions](#getusersidsquestions) - Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsQuestionsFeatured](#getusersidsquestionsfeatured) - Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsQuestionsNoAnswers](#getusersidsquestionsnoanswers) - Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsQuestionsUnaccepted](#getusersidsquestionsunaccepted) - Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsQuestionsUnanswered](#getusersidsquestionsunanswered) - Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
 
To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdsReputation](#getusersidsreputation) - Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.

* [getUsersIdsReputationHistory](#getusersidsreputationhistory) - Returns users' public reputation history.
 
This method returns a list of reputation_history.

* [getUsersIdsSuggestedEdits](#getusersidssuggestededits) - Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.

* [getUsersIdsTags](#getusersidstags) - Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tags.

* [getUsersIdsTimeline](#getusersidstimeline) - Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.

* [getUsersIdInbox](#getusersidinbox) - Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.

* [getUsersIdInboxUnread](#getusersidinboxunread) - Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.

* [getUsersIdNotifications](#getusersidnotifications) - Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getUsersIdNotificationsUnread](#getusersidnotificationsunread) - Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [getUsersIdPrivileges](#getusersidprivileges) - Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.

* [getUsersIdReputationHistoryFull](#getusersidreputationhistoryfull) - Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.

* [getUsersIdTagsTagsTopAnswers](#getusersidtagstagstopanswers) - Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [getUsersIdTagsTagsTopQuestions](#getusersidtagstagstopquestions) - Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [getUsersIdTopAnswerTags](#getusersidtopanswertags) - Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.

* [getUsersIdTopQuestionTags](#getusersidtopquestiontags) - Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.

* [getUsersIdWritePermissions](#getusersidwritepermissions) - Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.

* [postCommentsIdDelete](#postcommentsiddelete) - Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.

* [postCommentsIdEdit](#postcommentsidedit) - Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.

* [postPostsIdCommentsAdd](#postpostsidcommentsadd) - Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


## getAccessTokensAccessTokens

Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokensAccessTokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessTokensAccessTokensRequest();
    $request->accessTokens = 'nulla';
    $request->callback = 'corrupti';
    $request->filter = 'illum';
    $request->page = 423655;
    $request->pagesize = 623564;

    $response = $sdk->sdk->getAccessTokensAccessTokens($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccessTokensAccessTokensInvalidate

Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokensAccessTokensInvalidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessTokensAccessTokensInvalidateRequest();
    $request->accessTokens = 'deserunt';
    $request->callback = 'suscipit';
    $request->filter = 'iure';
    $request->page = 297534;
    $request->pagesize = 891773;

    $response = $sdk->sdk->getAccessTokensAccessTokensInvalidate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnswers

Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnswersRequest();
    $request->callback = 'ipsa';
    $request->filter = 'delectus';
    $request->fromdate = 272656;
    $request->max = 'suscipit';
    $request->min = 'molestiae';
    $request->order = GetAnswersOrderEnum::ASC;
    $request->page = 812169;
    $request->pagesize = 528895;
    $request->site = 'iusto';
    $request->sort = GetAnswersSortEnum::CREATION;
    $request->todate = 392785;

    $response = $sdk->sdk->getAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnswersIds

Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnswersIdsRequest();
    $request->callback = 'recusandae';
    $request->filter = 'temporibus';
    $request->fromdate = 71036;
    $request->ids = 'quis';
    $request->max = 'veritatis';
    $request->min = 'deserunt';
    $request->order = GetAnswersIdsOrderEnum::DESC;
    $request->page = 368241;
    $request->pagesize = 832620;
    $request->site = 'sapiente';
    $request->sort = GetAnswersIdsSortEnum::VOTES;
    $request->todate = 140350;

    $response = $sdk->sdk->getAnswersIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnswersIdsComments

Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAnswersIdsCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnswersIdsCommentsRequest();
    $request->callback = 'at';
    $request->filter = 'at';
    $request->fromdate = 978619;
    $request->ids = 'molestiae';
    $request->max = 'quod';
    $request->min = 'quod';
    $request->order = GetAnswersIdsCommentsOrderEnum::DESC;
    $request->page = 520478;
    $request->pagesize = 780529;
    $request->site = 'dolorum';
    $request->sort = GetAnswersIdsCommentsSortEnum::CREATION;
    $request->todate = 720633;

    $response = $sdk->sdk->getAnswersIdsComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAccessTokensDeAuthenticate

Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAccessTokensDeAuthenticateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAccessTokensDeAuthenticateRequest();
    $request->accessTokens = 'officia';
    $request->callback = 'occaecati';
    $request->filter = 'fugit';
    $request->page = 537373;
    $request->pagesize = 944669;

    $response = $sdk->sdk->getAppsAccessTokensDeAuthenticate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadges

Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesRequest();
    $request->callback = 'optio';
    $request->filter = 'totam';
    $request->fromdate = 105907;
    $request->inname = 'commodi';
    $request->max = 'molestiae';
    $request->min = 'modi';
    $request->order = GetBadgesOrderEnum::DESC;
    $request->page = 774234;
    $request->pagesize = 736918;
    $request->site = 'esse';
    $request->sort = GetBadgesSortEnum::RANK;
    $request->todate = 568434;

    $response = $sdk->sdk->getBadges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadgesName

Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesNameOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesNameSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesNameRequest();
    $request->callback = 'aspernatur';
    $request->filter = 'perferendis';
    $request->fromdate = 324141;
    $request->inname = 'natus';
    $request->max = 'sed';
    $request->min = 'iste';
    $request->order = GetBadgesNameOrderEnum::DESC;
    $request->page = 616934;
    $request->pagesize = 386489;
    $request->site = 'hic';
    $request->sort = GetBadgesNameSortEnum::NAME;
    $request->todate = 681820;

    $response = $sdk->sdk->getBadgesName($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadgesRecipients

Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesRecipientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesRecipientsRequest();
    $request->callback = 'in';
    $request->filter = 'corporis';
    $request->fromdate = 613064;
    $request->page = 437032;
    $request->pagesize = 902349;
    $request->site = 'quidem';
    $request->todate = 99280;

    $response = $sdk->sdk->getBadgesRecipients($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadgesTags

Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesTagsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesTagsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesTagsRequest();
    $request->callback = 'ipsa';
    $request->filter = 'reiciendis';
    $request->fromdate = 666767;
    $request->inname = 'mollitia';
    $request->max = 'laborum';
    $request->min = 'dolores';
    $request->order = GetBadgesTagsOrderEnum::DESC;
    $request->page = 358152;
    $request->pagesize = 128926;
    $request->site = 'nobis';
    $request->sort = GetBadgesTagsSortEnum::RANK;
    $request->todate = 607831;

    $response = $sdk->sdk->getBadgesTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadgesIds

Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesIdsRequest();
    $request->callback = 'nemo';
    $request->filter = 'minima';
    $request->fromdate = 570197;
    $request->ids = 'accusantium';
    $request->max = 'iure';
    $request->min = 'culpa';
    $request->order = GetBadgesIdsOrderEnum::ASC;
    $request->page = 958950;
    $request->pagesize = 102044;
    $request->site = 'mollitia';
    $request->sort = GetBadgesIdsSortEnum::RANK;
    $request->todate = 635059;

    $response = $sdk->sdk->getBadgesIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBadgesIdsRecipients

Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBadgesIdsRecipientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBadgesIdsRecipientsRequest();
    $request->callback = 'consequuntur';
    $request->filter = 'repellat';
    $request->fromdate = 653108;
    $request->ids = 'occaecati';
    $request->page = 253291;
    $request->pagesize = 414369;
    $request->site = 'quam';
    $request->todate = 474697;

    $response = $sdk->sdk->getBadgesIdsRecipients($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComments

Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsRequest();
    $request->callback = 'velit';
    $request->filter = 'error';
    $request->fromdate = 158969;
    $request->max = 'quis';
    $request->min = 'vitae';
    $request->order = GetCommentsOrderEnum::ASC;
    $request->page = 656330;
    $request->pagesize = 317202;
    $request->site = 'odit';
    $request->sort = GetCommentsSortEnum::VOTES;
    $request->todate = 196582;

    $response = $sdk->sdk->getComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCommentsIds

Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCommentsIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommentsIdsRequest();
    $request->callback = 'tenetur';
    $request->filter = 'ipsam';
    $request->fromdate = 662527;
    $request->ids = 'possimus';
    $request->max = 'aut';
    $request->min = 'quasi';
    $request->order = GetCommentsIdsOrderEnum::ASC;
    $request->page = 837945;
    $request->pagesize = 673660;
    $request->site = 'quasi';
    $request->sort = GetCommentsIdsSortEnum::VOTES;
    $request->todate = 976460;

    $response = $sdk->sdk->getCommentsIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getErrors

Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetErrorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetErrorsRequest();
    $request->callback = 'vero';
    $request->filter = 'nihil';
    $request->page = 509624;
    $request->pagesize = 976762;

    $response = $sdk->sdk->getErrors($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getErrorsId

This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetErrorsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetErrorsIdRequest();
    $request->id = 55714;

    $response = $sdk->sdk->getErrorsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvents

Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user

  

 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsRequest();
    $request->callback = 'omnis';
    $request->filter = 'voluptate';
    $request->page = 739264;
    $request->pagesize = 19987;
    $request->since = 39187;
    $request->site = 'reprehenderit';

    $response = $sdk->sdk->getEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiltersCreate

Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFiltersCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFiltersCreateRequest();
    $request->base = 'ut';
    $request->exclude = 'maiores';
    $request->include = 'dicta';
    $request->unsafe = false;

    $response = $sdk->sdk->getFiltersCreate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFiltersFilters

Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFiltersFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFiltersFiltersRequest();
    $request->filters = 'corporis';

    $response = $sdk->sdk->getFiltersFilters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxRequest();
    $request->callback = 'dolore';
    $request->filter = 'iusto';
    $request->page = 118727;
    $request->pagesize = 688661;

    $response = $sdk->sdk->getInbox($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxUnreadRequest();
    $request->callback = 'enim';
    $request->filter = 'accusamus';
    $request->page = 414263;
    $request->pagesize = 918236;
    $request->since = 64147;

    $response = $sdk->sdk->getInboxUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfo

Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInfoRequest();
    $request->site = 'ipsum';

    $response = $sdk->sdk->getInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Returns the user associated with the passed access_token.
 
This method returns a user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeRequest();
    $request->callback = 'quidem';
    $request->filter = 'molestias';
    $request->fromdate = 566602;
    $request->max = 'pariatur';
    $request->min = 'modi';
    $request->order = GetMeOrderEnum::ASC;
    $request->page = 523248;
    $request->pagesize = 916723;
    $request->site = 'quasi';
    $request->sort = GetMeSortEnum::MODIFIED;
    $request->todate = 575947;

    $response = $sdk->sdk->getMe($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeAnswers

Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeAnswersRequest();
    $request->callback = 'veritatis';
    $request->filter = 'itaque';
    $request->fromdate = 277718;
    $request->max = 'enim';
    $request->min = 'consequatur';
    $request->order = GetMeAnswersOrderEnum::ASC;
    $request->page = 842342;
    $request->pagesize = 131797;
    $request->site = 'deserunt';
    $request->sort = GetMeAnswersSortEnum::VOTES;
    $request->todate = 841386;

    $response = $sdk->sdk->getMeAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeAssociated

Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAssociatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeAssociatedRequest();
    $request->callback = 'labore';
    $request->filter = 'modi';
    $request->page = 183191;
    $request->pagesize = 397821;

    $response = $sdk->sdk->getMeAssociated($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeBadges

Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeBadgesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeBadgesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeBadgesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeBadgesRequest();
    $request->callback = 'cupiditate';
    $request->filter = 'quos';
    $request->fromdate = 20107;
    $request->max = 'magni';
    $request->min = 'assumenda';
    $request->order = GetMeBadgesOrderEnum::DESC;
    $request->page = 4695;
    $request->pagesize = 146441;
    $request->site = 'dolorum';
    $request->sort = GetMeBadgesSortEnum::NAME;
    $request->todate = 270008;

    $response = $sdk->sdk->getMeBadges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeComments

Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeCommentsRequest();
    $request->callback = 'facilis';
    $request->filter = 'tempore';
    $request->fromdate = 288476;
    $request->max = 'delectus';
    $request->min = 'eum';
    $request->order = GetMeCommentsOrderEnum::DESC;
    $request->page = 756107;
    $request->pagesize = 576157;
    $request->site = 'aliquid';
    $request->sort = GetMeCommentsSortEnum::VOTES;
    $request->todate = 896039;

    $response = $sdk->sdk->getMeComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeCommentsToId

Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsToIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsToIdOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeCommentsToIdSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeCommentsToIdRequest();
    $request->callback = 'sint';
    $request->filter = 'officia';
    $request->fromdate = 223081;
    $request->max = 'debitis';
    $request->min = 'a';
    $request->order = GetMeCommentsToIdOrderEnum::ASC;
    $request->page = 447125;
    $request->pagesize = 449198;
    $request->site = 'illum';
    $request->sort = GetMeCommentsToIdSortEnum::VOTES;
    $request->toId = 699479;
    $request->todate = 116202;

    $response = $sdk->sdk->getMeCommentsToId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeFavorites

Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFavoritesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFavoritesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeFavoritesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeFavoritesRequest();
    $request->callback = 'magnam';
    $request->filter = 'cumque';
    $request->fromdate = 813798;
    $request->max = 'ea';
    $request->min = 'aliquid';
    $request->order = GetMeFavoritesOrderEnum::ASC;
    $request->page = 881104;
    $request->pagesize = 249796;
    $request->site = 'occaecati';
    $request->sort = GetMeFavoritesSortEnum::CREATION;
    $request->todate = 881736;

    $response = $sdk->sdk->getMeFavorites($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeInbox

Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeInboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeInboxRequest();
    $request->callback = 'delectus';
    $request->filter = 'quidem';
    $request->page = 588465;
    $request->pagesize = 725255;
    $request->site = 'id';

    $response = $sdk->sdk->getMeInbox($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeInboxUnread

Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeInboxUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeInboxUnreadRequest();
    $request->callback = 'blanditiis';
    $request->filter = 'deleniti';
    $request->page = 956084;
    $request->pagesize = 230533;
    $request->since = 643990;
    $request->site = 'nisi';

    $response = $sdk->sdk->getMeInboxUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeMentioned

Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeMentionedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeMentionedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeMentionedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeMentionedRequest();
    $request->callback = 'vel';
    $request->filter = 'natus';
    $request->fromdate = 606393;
    $request->max = 'molestiae';
    $request->min = 'perferendis';
    $request->order = GetMeMentionedOrderEnum::DESC;
    $request->page = 301575;
    $request->pagesize = 716075;
    $request->site = 'id';
    $request->sort = GetMeMentionedSortEnum::CREATION;
    $request->todate = 290077;

    $response = $sdk->sdk->getMeMentioned($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeMerges

Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeMergesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeMergesRequest();
    $request->callback = 'suscipit';
    $request->filter = 'natus';
    $request->page = 749170;
    $request->pagesize = 428769;

    $response = $sdk->sdk->getMeMerges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeNotifications

Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeNotificationsRequest();
    $request->callback = 'vero';
    $request->filter = 'aspernatur';
    $request->page = 102863;
    $request->pagesize = 298282;
    $request->site = 'et';

    $response = $sdk->sdk->getMeNotifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeNotificationsUnread

Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeNotificationsUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeNotificationsUnreadRequest();
    $request->callback = 'excepturi';
    $request->filter = 'ullam';
    $request->page = 590873;
    $request->pagesize = 551816;
    $request->site = 'sint';

    $response = $sdk->sdk->getMeNotificationsUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMePrivileges

Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMePrivilegesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMePrivilegesRequest();
    $request->callback = 'accusantium';
    $request->filter = 'mollitia';
    $request->page = 968962;
    $request->pagesize = 652103;
    $request->site = 'ad';

    $response = $sdk->sdk->getMePrivileges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeQuestions

Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeQuestionsRequest();
    $request->callback = 'eum';
    $request->filter = 'dolor';
    $request->fromdate = 896547;
    $request->max = 'odit';
    $request->min = 'nemo';
    $request->order = GetMeQuestionsOrderEnum::DESC;
    $request->page = 435865;
    $request->pagesize = 984043;
    $request->site = 'debitis';
    $request->sort = GetMeQuestionsSortEnum::ACTIVITY;
    $request->todate = 806194;

    $response = $sdk->sdk->getMeQuestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeQuestionsFeatured

Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsFeaturedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsFeaturedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsFeaturedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeQuestionsFeaturedRequest();
    $request->callback = 'deleniti';
    $request->filter = 'facilis';
    $request->fromdate = 447926;
    $request->max = 'architecto';
    $request->min = 'architecto';
    $request->order = GetMeQuestionsFeaturedOrderEnum::ASC;
    $request->page = 352312;
    $request->pagesize = 714242;
    $request->site = 'nihil';
    $request->sort = GetMeQuestionsFeaturedSortEnum::VOTES;
    $request->todate = 841140;

    $response = $sdk->sdk->getMeQuestionsFeatured($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeQuestionsNoAnswers

Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsNoAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsNoAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsNoAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeQuestionsNoAnswersRequest();
    $request->callback = 'sed';
    $request->filter = 'saepe';
    $request->fromdate = 868126;
    $request->max = 'accusantium';
    $request->min = 'consequuntur';
    $request->order = GetMeQuestionsNoAnswersOrderEnum::ASC;
    $request->page = 615560;
    $request->pagesize = 166847;
    $request->site = 'sunt';
    $request->sort = GetMeQuestionsNoAnswersSortEnum::VOTES;
    $request->todate = 848009;

    $response = $sdk->sdk->getMeQuestionsNoAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeQuestionsUnaccepted

Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnacceptedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnacceptedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnacceptedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeQuestionsUnacceptedRequest();
    $request->callback = 'pariatur';
    $request->filter = 'maxime';
    $request->fromdate = 411397;
    $request->max = 'excepturi';
    $request->min = 'odit';
    $request->order = GetMeQuestionsUnacceptedOrderEnum::DESC;
    $request->page = 33222;
    $request->pagesize = 69167;
    $request->site = 'maiores';
    $request->sort = GetMeQuestionsUnacceptedSortEnum::VOTES;
    $request->todate = 373291;

    $response = $sdk->sdk->getMeQuestionsUnaccepted($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeQuestionsUnanswered

Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnansweredRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnansweredOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeQuestionsUnansweredSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeQuestionsUnansweredRequest();
    $request->callback = 'voluptate';
    $request->filter = 'autem';
    $request->fromdate = 722056;
    $request->max = 'eaque';
    $request->min = 'pariatur';
    $request->order = GetMeQuestionsUnansweredOrderEnum::DESC;
    $request->page = 975522;
    $request->pagesize = 16627;
    $request->site = 'fugiat';
    $request->sort = GetMeQuestionsUnansweredSortEnum::ACTIVITY;
    $request->todate = 11714;

    $response = $sdk->sdk->getMeQuestionsUnanswered($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeReputation

Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeReputationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeReputationRequest();
    $request->callback = 'cumque';
    $request->filter = 'corporis';
    $request->site = 'hic';

    $response = $sdk->sdk->getMeReputation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeReputationHistory

Returns user's public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeReputationHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeReputationHistoryRequest();
    $request->callback = 'libero';
    $request->filter = 'nobis';
    $request->page = 171629;
    $request->pagesize = 339404;
    $request->site = 'totam';

    $response = $sdk->sdk->getMeReputationHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeReputationHistoryFull

Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeReputationHistoryFullRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeReputationHistoryFullRequest();
    $request->callback = 'dignissimos';
    $request->filter = 'eaque';
    $request->page = 338985;
    $request->pagesize = 199996;
    $request->site = 'eos';

    $response = $sdk->sdk->getMeReputationHistoryFull($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeSuggestedEdits

Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSuggestedEditsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSuggestedEditsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSuggestedEditsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeSuggestedEditsRequest();
    $request->callback = 'perferendis';
    $request->filter = 'dolores';
    $request->fromdate = 793698;
    $request->max = 'quam';
    $request->min = 'dolor';
    $request->order = GetMeSuggestedEditsOrderEnum::ASC;
    $request->page = 345352;
    $request->pagesize = 944120;
    $request->site = 'recusandae';
    $request->sort = GetMeSuggestedEditsSortEnum::APPROVAL;
    $request->todate = 704415;

    $response = $sdk->sdk->getMeSuggestedEdits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTags

Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTagsRequest();
    $request->callback = 'perspiciatis';
    $request->filter = 'voluptatem';
    $request->fromdate = 783645;
    $request->max = 'consequuntur';
    $request->min = 'blanditiis';
    $request->order = GetMeTagsOrderEnum::ASC;
    $request->page = 50370;
    $request->pagesize = 577229;
    $request->site = 'rerum';
    $request->sort = GetMeTagsSortEnum::POPULAR;
    $request->todate = 992397;

    $response = $sdk->sdk->getMeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTagsTagsTopAnswers

Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTagsTagsTopAnswersRequest();
    $request->callback = 'earum';
    $request->filter = 'modi';
    $request->fromdate = 613966;
    $request->max = 'dolorum';
    $request->min = 'deleniti';
    $request->order = GetMeTagsTagsTopAnswersOrderEnum::ASC;
    $request->page = 589910;
    $request->pagesize = 750844;
    $request->site = 'libero';
    $request->sort = GetMeTagsTagsTopAnswersSortEnum::VOTES;
    $request->tags = 'quaerat';
    $request->todate = 554242;

    $response = $sdk->sdk->getMeTagsTagsTopAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTagsTagsTopQuestions

Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopQuestionsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTagsTagsTopQuestionsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTagsTagsTopQuestionsRequest();
    $request->callback = 'aliquid';
    $request->filter = 'dolorem';
    $request->fromdate = 209843;
    $request->max = 'dolor';
    $request->min = 'qui';
    $request->order = GetMeTagsTagsTopQuestionsOrderEnum::DESC;
    $request->page = 944373;
    $request->pagesize = 569574;
    $request->site = 'cum';
    $request->sort = GetMeTagsTagsTopQuestionsSortEnum::HOT;
    $request->tags = 'dignissimos';
    $request->todate = 970237;

    $response = $sdk->sdk->getMeTagsTagsTopQuestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTimeline

Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTimelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTimelineRequest();
    $request->callback = 'amet';
    $request->filter = 'dolorum';
    $request->fromdate = 254356;
    $request->page = 85295;
    $request->pagesize = 58029;
    $request->site = 'ipsa';
    $request->todate = 434417;

    $response = $sdk->sdk->getMeTimeline($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTopAnswerTags

Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTopAnswerTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTopAnswerTagsRequest();
    $request->callback = 'odio';
    $request->filter = 'quaerat';
    $request->page = 881005;
    $request->pagesize = 696344;
    $request->site = 'voluptatibus';

    $response = $sdk->sdk->getMeTopAnswerTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeTopQuestionTags

Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeTopQuestionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeTopQuestionTagsRequest();
    $request->callback = 'voluptas';
    $request->filter = 'natus';
    $request->page = 179603;
    $request->pagesize = 542499;
    $request->site = 'sit';

    $response = $sdk->sdk->getMeTopQuestionTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeWritePermissions

Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeWritePermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeWritePermissionsRequest();
    $request->callback = 'fugiat';
    $request->filter = 'ab';
    $request->page = 743835;
    $request->pagesize = 679393;
    $request->site = 'iusto';

    $response = $sdk->sdk->getMeWritePermissions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsRequest();
    $request->callback = 'voluptate';
    $request->filter = 'dolorum';
    $request->page = 536579;
    $request->pagesize = 607045;

    $response = $sdk->sdk->getNotifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationsUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationsUnreadRequest();
    $request->callback = 'necessitatibus';
    $request->filter = 'distinctio';
    $request->page = 990339;
    $request->pagesize = 469497;

    $response = $sdk->sdk->getNotificationsUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPosts

Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsRequest();
    $request->callback = 'ipsum';
    $request->filter = 'voluptate';
    $request->fromdate = 663078;
    $request->max = 'saepe';
    $request->min = 'eius';
    $request->order = GetPostsOrderEnum::DESC;
    $request->page = 20651;
    $request->pagesize = 229219;
    $request->site = 'optio';
    $request->sort = GetPostsSortEnum::VOTES;
    $request->todate = 320017;

    $response = $sdk->sdk->getPosts($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostsIds

Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsIdsRequest();
    $request->callback = 'saepe';
    $request->filter = 'suscipit';
    $request->fromdate = 645785;
    $request->ids = 'provident';
    $request->max = 'minima';
    $request->min = 'repellendus';
    $request->order = GetPostsIdsOrderEnum::ASC;
    $request->page = 628982;
    $request->pagesize = 55;
    $request->site = 'at';
    $request->sort = GetPostsIdsSortEnum::ACTIVITY;
    $request->todate = 273542;

    $response = $sdk->sdk->getPostsIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostsIdsComments

Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsIdsCommentsRequest();
    $request->callback = 'vel';
    $request->filter = 'quod';
    $request->fromdate = 885338;
    $request->ids = 'qui';
    $request->max = 'dolorum';
    $request->min = 'a';
    $request->order = GetPostsIdsCommentsOrderEnum::DESC;
    $request->page = 687488;
    $request->pagesize = 483409;
    $request->site = 'ipsum';
    $request->sort = GetPostsIdsCommentsSortEnum::VOTES;
    $request->todate = 947371;

    $response = $sdk->sdk->getPostsIdsComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostsIdsRevisions

Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsIdsRevisionsRequest();
    $request->callback = 'amet';
    $request->filter = 'tempore';
    $request->fromdate = 880298;
    $request->ids = 'numquam';
    $request->page = 313692;
    $request->pagesize = 213312;
    $request->site = 'sapiente';
    $request->todate = 518201;

    $response = $sdk->sdk->getPostsIdsRevisions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPostsIdsSuggestedEdits

Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.

 
This method returns a list of suggested-edits.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsSuggestedEditsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsSuggestedEditsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPostsIdsSuggestedEditsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPostsIdsSuggestedEditsRequest();
    $request->callback = 'nihil';
    $request->filter = 'sit';
    $request->fromdate = 711584;
    $request->ids = 'neque';
    $request->max = 'sed';
    $request->min = 'vel';
    $request->order = GetPostsIdsSuggestedEditsOrderEnum::ASC;
    $request->page = 374170;
    $request->pagesize = 646265;
    $request->site = 'quam';
    $request->sort = GetPostsIdsSuggestedEditsSortEnum::CREATION;
    $request->todate = 277628;

    $response = $sdk->sdk->getPostsIdsSuggestedEdits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrivileges

Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrivilegesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrivilegesRequest();
    $request->callback = 'qui';
    $request->filter = 'cupiditate';
    $request->page = 807581;
    $request->pagesize = 863856;
    $request->site = 'soluta';

    $response = $sdk->sdk->getPrivileges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestions

Gets all the questions on the site.
 
This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - hot - by the formula ordering the hot tab Does not accept min or max
 - week - by the formula ordering the week tab Does not accept min or max
 - month - by the formula ordering the month tab Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsRequest();
    $request->callback = 'dicta';
    $request->filter = 'laborum';
    $request->fromdate = 517379;
    $request->max = 'incidunt';
    $request->min = 'aspernatur';
    $request->order = GetQuestionsOrderEnum::DESC;
    $request->page = 716860;
    $request->pagesize = 704474;
    $request->site = 'aliquid';
    $request->sort = GetQuestionsSortEnum::HOT;
    $request->tagged = 'molestias';
    $request->todate = 840429;

    $response = $sdk->sdk->getQuestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsFeatured

Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsFeaturedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsFeaturedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsFeaturedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsFeaturedRequest();
    $request->callback = 'qui';
    $request->filter = 'neque';
    $request->fromdate = 144847;
    $request->max = 'magni';
    $request->min = 'odio';
    $request->order = GetQuestionsFeaturedOrderEnum::DESC;
    $request->page = 355613;
    $request->pagesize = 722081;
    $request->site = 'hic';
    $request->sort = GetQuestionsFeaturedSortEnum::ACTIVITY;
    $request->tagged = 'cumque';
    $request->todate = 746994;

    $response = $sdk->sdk->getQuestionsFeatured($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsNoAnswers

Returns questions which have received no answers.
 
Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
 
This method corresponds roughly with the this site tab.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsNoAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsNoAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsNoAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsNoAnswersRequest();
    $request->callback = 'nobis';
    $request->filter = 'et';
    $request->fromdate = 903720;
    $request->max = 'ipsum';
    $request->min = 'veritatis';
    $request->order = GetQuestionsNoAnswersOrderEnum::ASC;
    $request->page = 552193;
    $request->pagesize = 731694;
    $request->site = 'cupiditate';
    $request->sort = GetQuestionsNoAnswersSortEnum::ACTIVITY;
    $request->tagged = 'delectus';
    $request->todate = 209157;

    $response = $sdk->sdk->getQuestionsNoAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsUnanswered

Returns questions the site considers to be unanswered.
 
Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
Compare with /questions/no-answers.
 
This method corresponds roughly with the unanswered tab.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsUnansweredRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsUnansweredOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsUnansweredSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsUnansweredRequest();
    $request->callback = 'dolore';
    $request->filter = 'labore';
    $request->fromdate = 240829;
    $request->max = 'dolorum';
    $request->min = 'architecto';
    $request->order = GetQuestionsUnansweredOrderEnum::DESC;
    $request->page = 16429;
    $request->pagesize = 555649;
    $request->site = 'itaque';
    $request->sort = GetQuestionsUnansweredSortEnum::ACTIVITY;
    $request->tagged = 'est';
    $request->todate = 833038;

    $response = $sdk->sdk->getQuestionsUnanswered($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIds

Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsRequest();
    $request->callback = 'porro';
    $request->filter = 'doloribus';
    $request->fromdate = 281730;
    $request->ids = 'facilis';
    $request->max = 'cupiditate';
    $request->min = 'qui';
    $request->order = GetQuestionsIdsOrderEnum::DESC;
    $request->page = 512393;
    $request->pagesize = 485628;
    $request->site = 'occaecati';
    $request->sort = GetQuestionsIdsSortEnum::VOTES;
    $request->todate = 787542;

    $response = $sdk->sdk->getQuestionsIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIdsAnswers

Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsAnswersRequest();
    $request->callback = 'vero';
    $request->filter = 'omnis';
    $request->fromdate = 338159;
    $request->ids = 'ipsum';
    $request->max = 'delectus';
    $request->min = 'voluptate';
    $request->order = GetQuestionsIdsAnswersOrderEnum::DESC;
    $request->page = 878870;
    $request->pagesize = 949319;
    $request->site = 'dignissimos';
    $request->sort = GetQuestionsIdsAnswersSortEnum::VOTES;
    $request->todate = 715561;

    $response = $sdk->sdk->getQuestionsIdsAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIdsComments

Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsCommentsRequest();
    $request->callback = 'quod';
    $request->filter = 'odio';
    $request->fromdate = 630448;
    $request->ids = 'facilis';
    $request->max = 'vero';
    $request->min = 'ducimus';
    $request->order = GetQuestionsIdsCommentsOrderEnum::DESC;
    $request->page = 844550;
    $request->pagesize = 848944;
    $request->site = 'sequi';
    $request->sort = GetQuestionsIdsCommentsSortEnum::VOTES;
    $request->todate = 773326;

    $response = $sdk->sdk->getQuestionsIdsComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIdsLinked

Gets questions which link to those questions identified in {ids}.
 
This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
 
A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsLinkedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsLinkedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsLinkedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsLinkedRequest();
    $request->callback = 'aut';
    $request->filter = 'voluptatibus';
    $request->fromdate = 347233;
    $request->ids = 'nulla';
    $request->max = 'fugit';
    $request->min = 'porro';
    $request->order = GetQuestionsIdsLinkedOrderEnum::ASC;
    $request->page = 985033;
    $request->pagesize = 478370;
    $request->site = 'eligendi';
    $request->sort = GetQuestionsIdsLinkedSortEnum::CREATION;
    $request->todate = 4048;

    $response = $sdk->sdk->getQuestionsIdsLinked($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIdsRelated

Returns questions that the site considers related to those identified in {ids}.
 
The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsRelatedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsRelatedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsRelatedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsRelatedRequest();
    $request->callback = 'officia';
    $request->filter = 'tempora';
    $request->fromdate = 368584;
    $request->ids = 'ea';
    $request->max = 'aspernatur';
    $request->min = 'vel';
    $request->order = GetQuestionsIdsRelatedOrderEnum::ASC;
    $request->page = 297842;
    $request->pagesize = 189848;
    $request->site = 'ex';
    $request->sort = GetQuestionsIdsRelatedSortEnum::VOTES;
    $request->todate = 120657;

    $response = $sdk->sdk->getQuestionsIdsRelated($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuestionsIdsTimeline

Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuestionsIdsTimelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuestionsIdsTimelineRequest();
    $request->callback = 'dolor';
    $request->filter = 'maiores';
    $request->fromdate = 97844;
    $request->ids = 'ex';
    $request->page = 862192;
    $request->pagesize = 569211;
    $request->site = 'voluptatibus';
    $request->todate = 343605;

    $response = $sdk->sdk->getQuestionsIdsTimeline($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevisionsIds

Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRevisionsIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRevisionsIdsRequest();
    $request->callback = 'sapiente';
    $request->filter = 'quisquam';
    $request->fromdate = 906556;
    $request->ids = 'ea';
    $request->page = 774048;
    $request->pagesize = 359271;
    $request->site = 'veniam';
    $request->todate = 399499;

    $response = $sdk->sdk->getRevisionsIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearch

Searches a site for any questions which fit the given criteria.
 
This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
 
At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
 
tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchRequest();
    $request->callback = 'inventore';
    $request->filter = 'magnam';
    $request->fromdate = 407241;
    $request->intitle = 'quo';
    $request->max = 'consectetur';
    $request->min = 'recusandae';
    $request->nottagged = 'aspernatur';
    $request->order = GetSearchOrderEnum::DESC;
    $request->page = 53427;
    $request->pagesize = 952871;
    $request->site = 'libero';
    $request->sort = GetSearchSortEnum::ACTIVITY;
    $request->tagged = 'aut';
    $request->todate = 533466;

    $response = $sdk->sdk->getSearch($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchAdvanced

Searches a site for any questions which fit the given criteria.
 
Search criteria are expressed using the following parameters:
  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
 - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
 - answers - the minimum number of answers returned questions must have.
 - body - text which must appear in returned questions' bodies.
 - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
 - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
 - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
 - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
 - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
 - title - text which must appear in returned questions' titles.
 - user - the id of the user who must own the questions returned.
 - url - a url which must be contained in a post, may include a wildcard.
 - views - the minimum number of views returned questions must have.
 - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.

  
At least one additional parameter must be set if nottagged is set, for performance reasons.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedAcceptedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedClosedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedMigratedEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedNoticeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchAdvancedWikiEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchAdvancedRequest();
    $request->accepted = GetSearchAdvancedAcceptedEnum::FALSE;
    $request->answers = 304582;
    $request->body = 'fugit';
    $request->callback = 'accusamus';
    $request->closed = GetSearchAdvancedClosedEnum::TRUE;
    $request->filter = 'non';
    $request->fromdate = 89603;
    $request->max = 'dolorum';
    $request->migrated = GetSearchAdvancedMigratedEnum::FALSE;
    $request->min = 'placeat';
    $request->notice = GetSearchAdvancedNoticeEnum::TRUE;
    $request->nottagged = 'eum';
    $request->order = GetSearchAdvancedOrderEnum::DESC;
    $request->page = 752135;
    $request->pagesize = 557369;
    $request->q = 'assumenda';
    $request->site = 'nulla';
    $request->sort = GetSearchAdvancedSortEnum::CREATION;
    $request->tagged = 'libero';
    $request->title = 'Mr.';
    $request->todate = 270328;
    $request->url = 'numquam';
    $request->user = 131482;
    $request->views = 591935;
    $request->wiki = GetSearchAdvancedWikiEnum::TRUE;

    $response = $sdk->sdk->getSearchAdvanced($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSimilar

Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
This method is roughly equivalent to a site's related questions suggestion on the ask page.
 
This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
 
Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
 
If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimilarRequest();
    $request->callback = 'molestiae';
    $request->filter = 'magnam';
    $request->fromdate = 487935;
    $request->max = 'eius';
    $request->min = 'esse';
    $request->nottagged = 'esse';
    $request->order = GetSimilarOrderEnum::ASC;
    $request->page = 683282;
    $request->pagesize = 442015;
    $request->site = 'quidem';
    $request->sort = GetSimilarSortEnum::RELEVANCE;
    $request->tagged = 'ut';
    $request->title = 'Ms.';
    $request->todate = 379927;

    $response = $sdk->sdk->getSimilar($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSites

Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSitesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSitesRequest();
    $request->callback = 'assumenda';
    $request->filter = 'eos';
    $request->page = 509342;
    $request->pagesize = 788546;

    $response = $sdk->sdk->getSites($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuggestedEdits

Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuggestedEditsRequest();
    $request->callback = 'veritatis';
    $request->filter = 'ipsa';
    $request->fromdate = 660040;
    $request->max = 'quidem';
    $request->min = 'neque';
    $request->order = GetSuggestedEditsOrderEnum::ASC;
    $request->page = 847276;
    $request->pagesize = 777408;
    $request->site = 'fuga';
    $request->sort = GetSuggestedEditsSortEnum::CREATION;
    $request->todate = 178367;

    $response = $sdk->sdk->getSuggestedEdits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuggestedEditsIds

Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSuggestedEditsIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuggestedEditsIdsRequest();
    $request->callback = 'voluptas';
    $request->filter = 'ab';
    $request->fromdate = 587600;
    $request->ids = 'consequatur';
    $request->max = 'tempora';
    $request->min = 'debitis';
    $request->order = GetSuggestedEditsIdsOrderEnum::DESC;
    $request->page = 133465;
    $request->pagesize = 197054;
    $request->site = 'quo';
    $request->sort = GetSuggestedEditsIdsSortEnum::APPROVAL;
    $request->todate = 925164;

    $response = $sdk->sdk->getSuggestedEditsIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->callback = 'aperiam';
    $request->filter = 'distinctio';
    $request->fromdate = 799796;
    $request->inname = 'dignissimos';
    $request->max = 'inventore';
    $request->min = 'nihil';
    $request->order = GetTagsOrderEnum::ASC;
    $request->page = 882710;
    $request->pagesize = 306810;
    $request->site = 'odio';
    $request->sort = GetTagsSortEnum::ACTIVITY;
    $request->todate = 414567;

    $response = $sdk->sdk->getTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsModeratorOnly

Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsModeratorOnlyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsModeratorOnlyOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsModeratorOnlySortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsModeratorOnlyRequest();
    $request->callback = 'sapiente';
    $request->filter = 'dolores';
    $request->fromdate = 645570;
    $request->inname = 'molestiae';
    $request->max = 'accusantium';
    $request->min = 'porro';
    $request->order = GetTagsModeratorOnlyOrderEnum::DESC;
    $request->page = 556429;
    $request->pagesize = 510017;
    $request->site = 'consequuntur';
    $request->sort = GetTagsModeratorOnlySortEnum::ACTIVITY;
    $request->todate = 143829;

    $response = $sdk->sdk->getTagsModeratorOnly($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsRequired

Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequiredRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequiredOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequiredSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequiredRequest();
    $request->callback = 'fuga';
    $request->filter = 'mollitia';
    $request->fromdate = 277596;
    $request->inname = 'atque';
    $request->max = 'explicabo';
    $request->min = 'minima';
    $request->order = GetTagsRequiredOrderEnum::DESC;
    $request->page = 147014;
    $request->pagesize = 956406;
    $request->site = 'consequuntur';
    $request->sort = GetTagsRequiredSortEnum::POPULAR;
    $request->todate = 129412;

    $response = $sdk->sdk->getTagsRequired($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsSynonyms

Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag_synonyms.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsSynonymsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsSynonymsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsSynonymsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsSynonymsRequest();
    $request->callback = 'saepe';
    $request->filter = 'occaecati';
    $request->fromdate = 543806;
    $request->max = 'et';
    $request->min = 'esse';
    $request->order = GetTagsSynonymsOrderEnum::ASC;
    $request->page = 882042;
    $request->pagesize = 82971;
    $request->site = 'esse';
    $request->sort = GetTagsSynonymsSortEnum::ACTIVITY;
    $request->todate = 724168;

    $response = $sdk->sdk->getTagsSynonyms($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagsFaq

Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsFaqRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagsFaqRequest();
    $request->callback = 'vero';
    $request->filter = 'aliquid';
    $request->page = 93459;
    $request->pagesize = 904045;
    $request->site = 'vel';
    $request->tags = 'harum';

    $response = $sdk->sdk->getTagsTagsFaq($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagsInfo

Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsInfoOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsInfoSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagsInfoRequest();
    $request->callback = 'molestiae';
    $request->filter = 'rerum';
    $request->fromdate = 580197;
    $request->max = 'minima';
    $request->min = 'distinctio';
    $request->order = GetTagsTagsInfoOrderEnum::ASC;
    $request->page = 27069;
    $request->pagesize = 636061;
    $request->site = 'tempore';
    $request->sort = GetTagsTagsInfoSortEnum::POPULAR;
    $request->tags = 'cumque';
    $request->todate = 160538;

    $response = $sdk->sdk->getTagsTagsInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagsRelated

Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsRelatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagsRelatedRequest();
    $request->callback = 'consequatur';
    $request->filter = 'minus';
    $request->page = 308286;
    $request->pagesize = 959167;
    $request->site = 'consectetur';
    $request->tags = 'esse';

    $response = $sdk->sdk->getTagsTagsRelated($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagsSynonyms

Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag synonyms.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsSynonymsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsSynonymsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsSynonymsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagsSynonymsRequest();
    $request->callback = 'blanditiis';
    $request->filter = 'provident';
    $request->fromdate = 953722;
    $request->max = 'nulla';
    $request->min = 'quas';
    $request->order = GetTagsTagsSynonymsOrderEnum::DESC;
    $request->page = 97468;
    $request->pagesize = 951875;
    $request->site = 'error';
    $request->sort = GetTagsTagsSynonymsSortEnum::APPLIED;
    $request->tags = 'pariatur';
    $request->todate = 820767;

    $response = $sdk->sdk->getTagsTagsSynonyms($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagsWikis

Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagsWikisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagsWikisRequest();
    $request->callback = 'quia';
    $request->filter = 'eveniet';
    $request->page = 992430;
    $request->pagesize = 815524;
    $request->site = 'veritatis';
    $request->tags = 'consequuntur';

    $response = $sdk->sdk->getTagsTagsWikis($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagTopAnswerersPeriod

Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagTopAnswerersPeriodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagTopAnswerersPeriodPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagTopAnswerersPeriodRequest();
    $request->callback = 'quasi';
    $request->filter = 'similique';
    $request->page = 633608;
    $request->pagesize = 398434;
    $request->period = GetTagsTagTopAnswerersPeriodPeriodEnum::MONTH;
    $request->site = 'quae';
    $request->tag = 'earum';

    $response = $sdk->sdk->getTagsTagTopAnswerersPeriod($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagTopAskersPeriod

Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagTopAskersPeriodRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagTopAskersPeriodPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagTopAskersPeriodRequest();
    $request->callback = 'vel';
    $request->filter = 'in';
    $request->page = 258684;
    $request->pagesize = 727697;
    $request->period = GetTagsTagTopAskersPeriodPeriodEnum::MONTH;
    $request->site = 'soluta';
    $request->tag = 'accusantium';

    $response = $sdk->sdk->getTagsTagTopAskersPeriod($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsers

Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->callback = 'aliquam';
    $request->filter = 'sapiente';
    $request->fromdate = 119771;
    $request->inname = 'ullam';
    $request->max = 'reprehenderit';
    $request->min = 'ullam';
    $request->order = GetUsersOrderEnum::DESC;
    $request->page = 16328;
    $request->pagesize = 531849;
    $request->site = 'qui';
    $request->sort = GetUsersSortEnum::MODIFIED;
    $request->todate = 401259;

    $response = $sdk->sdk->getUsers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersModerators

Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersModeratorsRequest();
    $request->callback = 'deleniti';
    $request->filter = 'itaque';
    $request->fromdate = 680270;
    $request->max = 'architecto';
    $request->min = 'omnis';
    $request->order = GetUsersModeratorsOrderEnum::ASC;
    $request->page = 98478;
    $request->pagesize = 869489;
    $request->site = 'et';
    $request->sort = GetUsersModeratorsSortEnum::CREATION;
    $request->todate = 55965;

    $response = $sdk->sdk->getUsersModerators($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersModeratorsElected

Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsElectedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsElectedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersModeratorsElectedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersModeratorsElectedRequest();
    $request->callback = 'minima';
    $request->filter = 'veritatis';
    $request->fromdate = 232744;
    $request->max = 'adipisci';
    $request->min = 'iste';
    $request->order = GetUsersModeratorsElectedOrderEnum::ASC;
    $request->page = 33074;
    $request->pagesize = 522371;
    $request->site = 'aut';
    $request->sort = GetUsersModeratorsElectedSortEnum::NAME;
    $request->todate = 428796;

    $response = $sdk->sdk->getUsersModeratorsElected($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIds

Gets the users identified in ids in {ids}.
 
Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsRequest();
    $request->callback = 'mollitia';
    $request->filter = 'ab';
    $request->fromdate = 544591;
    $request->ids = 'non';
    $request->max = 'voluptatem';
    $request->min = 'dolor';
    $request->order = GetUsersIdsOrderEnum::ASC;
    $request->page = 253191;
    $request->pagesize = 771089;
    $request->site = 'explicabo';
    $request->sort = GetUsersIdsSortEnum::CREATION;
    $request->todate = 12036;

    $response = $sdk->sdk->getUsersIds($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsAnswers

Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsAnswersRequest();
    $request->callback = 'dignissimos';
    $request->filter = 'dicta';
    $request->fromdate = 981640;
    $request->ids = 'natus';
    $request->max = 'velit';
    $request->min = 'voluptatibus';
    $request->order = GetUsersIdsAnswersOrderEnum::DESC;
    $request->page = 990345;
    $request->pagesize = 45659;
    $request->site = 'ea';
    $request->sort = GetUsersIdsAnswersSortEnum::ACTIVITY;
    $request->todate = 162954;

    $response = $sdk->sdk->getUsersIdsAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsAssociated

Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsAssociatedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsAssociatedRequest();
    $request->callback = 'repellendus';
    $request->filter = 'officia';
    $request->ids = 'maxime';
    $request->page = 490305;
    $request->pagesize = 640024;

    $response = $sdk->sdk->getUsersIdsAssociated($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsBadges

Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsBadgesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsBadgesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsBadgesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsBadgesRequest();
    $request->callback = 'asperiores';
    $request->filter = 'nemo';
    $request->fromdate = 65304;
    $request->ids = 'quaerat';
    $request->max = 'porro';
    $request->min = 'quod';
    $request->order = GetUsersIdsBadgesOrderEnum::DESC;
    $request->page = 70447;
    $request->pagesize = 241418;
    $request->site = 'fuga';
    $request->sort = GetUsersIdsBadgesSortEnum::TYPE;
    $request->todate = 380729;

    $response = $sdk->sdk->getUsersIdsBadges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsComments

Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsCommentsRequest();
    $request->callback = 'velit';
    $request->filter = 'culpa';
    $request->fromdate = 665859;
    $request->ids = 'recusandae';
    $request->max = 'totam';
    $request->min = 'fugiat';
    $request->order = GetUsersIdsCommentsOrderEnum::DESC;
    $request->page = 497678;
    $request->pagesize = 554688;
    $request->site = 'vel';
    $request->sort = GetUsersIdsCommentsSortEnum::CREATION;
    $request->todate = 822560;

    $response = $sdk->sdk->getUsersIdsComments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsCommentsToid

Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsToidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsToidOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsCommentsToidSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsCommentsToidRequest();
    $request->callback = 'facilis';
    $request->filter = 'cum';
    $request->fromdate = 414857;
    $request->ids = 'in';
    $request->max = 'corporis';
    $request->min = 'reiciendis';
    $request->order = GetUsersIdsCommentsToidOrderEnum::ASC;
    $request->page = 363161;
    $request->pagesize = 924967;
    $request->site = 'aliquid';
    $request->sort = GetUsersIdsCommentsToidSortEnum::CREATION;
    $request->todate = 738683;
    $request->toid = 232627;

    $response = $sdk->sdk->getUsersIdsCommentsToid($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsFavorites

Get the questions that users in {ids} have favorited.
 
This method is effectively a view onto a user's favorites tab.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - added - when the user favorited the question
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsFavoritesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsFavoritesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsFavoritesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsFavoritesRequest();
    $request->callback = 'in';
    $request->filter = 'exercitationem';
    $request->fromdate = 937285;
    $request->ids = 'facere';
    $request->max = 'numquam';
    $request->min = 'doloribus';
    $request->order = GetUsersIdsFavoritesOrderEnum::DESC;
    $request->page = 968972;
    $request->pagesize = 697142;
    $request->site = 'saepe';
    $request->sort = GetUsersIdsFavoritesSortEnum::ADDED;
    $request->todate = 296556;

    $response = $sdk->sdk->getUsersIdsFavorites($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsMentioned

Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsMentionedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsMentionedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsMentionedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsMentionedRequest();
    $request->callback = 'sunt';
    $request->filter = 'asperiores';
    $request->fromdate = 241545;
    $request->ids = 'non';
    $request->max = 'amet';
    $request->min = 'beatae';
    $request->order = GetUsersIdsMentionedOrderEnum::DESC;
    $request->page = 950953;
    $request->pagesize = 891523;
    $request->site = 'consectetur';
    $request->sort = GetUsersIdsMentionedSortEnum::CREATION;
    $request->todate = 689768;

    $response = $sdk->sdk->getUsersIdsMentioned($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsMerges

Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsMergesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsMergesRequest();
    $request->callback = 'laboriosam';
    $request->filter = 'ipsa';
    $request->ids = 'voluptates';
    $request->page = 730709;
    $request->pagesize = 113816;

    $response = $sdk->sdk->getUsersIdsMerges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsQuestions

Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsQuestionsRequest();
    $request->callback = 'accusamus';
    $request->filter = 'similique';
    $request->fromdate = 272437;
    $request->ids = 'aspernatur';
    $request->max = 'voluptas';
    $request->min = 'voluptas';
    $request->order = GetUsersIdsQuestionsOrderEnum::DESC;
    $request->page = 324405;
    $request->pagesize = 748789;
    $request->site = 'dolorum';
    $request->sort = GetUsersIdsQuestionsSortEnum::ACTIVITY;
    $request->todate = 795535;

    $response = $sdk->sdk->getUsersIdsQuestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsQuestionsFeatured

Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsFeaturedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsFeaturedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsFeaturedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsQuestionsFeaturedRequest();
    $request->callback = 'dolores';
    $request->filter = 'blanditiis';
    $request->fromdate = 449292;
    $request->ids = 'dolore';
    $request->max = 'aliquam';
    $request->min = 'officiis';
    $request->order = GetUsersIdsQuestionsFeaturedOrderEnum::ASC;
    $request->page = 351870;
    $request->pagesize = 237742;
    $request->site = 'cum';
    $request->sort = GetUsersIdsQuestionsFeaturedSortEnum::CREATION;
    $request->todate = 555361;

    $response = $sdk->sdk->getUsersIdsQuestionsFeatured($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsQuestionsNoAnswers

Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsNoAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsNoAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsNoAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsQuestionsNoAnswersRequest();
    $request->callback = 'hic';
    $request->filter = 'nesciunt';
    $request->fromdate = 633998;
    $request->ids = 'corrupti';
    $request->max = 'pariatur';
    $request->min = 'totam';
    $request->order = GetUsersIdsQuestionsNoAnswersOrderEnum::ASC;
    $request->page = 348783;
    $request->pagesize = 750765;
    $request->site = 'sit';
    $request->sort = GetUsersIdsQuestionsNoAnswersSortEnum::VOTES;
    $request->todate = 148829;

    $response = $sdk->sdk->getUsersIdsQuestionsNoAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsQuestionsUnaccepted

Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnacceptedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnacceptedOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnacceptedSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsQuestionsUnacceptedRequest();
    $request->callback = 'reiciendis';
    $request->filter = 'explicabo';
    $request->fromdate = 994401;
    $request->ids = 'facilis';
    $request->max = 'voluptate';
    $request->min = 'expedita';
    $request->order = GetUsersIdsQuestionsUnacceptedOrderEnum::DESC;
    $request->page = 611749;
    $request->pagesize = 292794;
    $request->site = 'laborum';
    $request->sort = GetUsersIdsQuestionsUnacceptedSortEnum::ACTIVITY;
    $request->todate = 447516;

    $response = $sdk->sdk->getUsersIdsQuestionsUnaccepted($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsQuestionsUnanswered

Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
 
To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnansweredRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnansweredOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsQuestionsUnansweredSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsQuestionsUnansweredRequest();
    $request->callback = 'commodi';
    $request->filter = 'quidem';
    $request->fromdate = 131289;
    $request->ids = 'voluptas';
    $request->max = 'unde';
    $request->min = 'architecto';
    $request->order = GetUsersIdsQuestionsUnansweredOrderEnum::DESC;
    $request->page = 960257;
    $request->pagesize = 895386;
    $request->site = 'illo';
    $request->sort = GetUsersIdsQuestionsUnansweredSortEnum::VOTES;
    $request->todate = 19300;

    $response = $sdk->sdk->getUsersIdsQuestionsUnanswered($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsReputation

Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsReputationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsReputationRequest();
    $request->callback = 'corrupti';
    $request->filter = 'maiores';
    $request->fromdate = 274823;
    $request->ids = 'sed';
    $request->page = 592231;
    $request->pagesize = 258702;
    $request->site = 'necessitatibus';
    $request->todate = 215529;

    $response = $sdk->sdk->getUsersIdsReputation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsReputationHistory

Returns users' public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsReputationHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsReputationHistoryRequest();
    $request->callback = 'ea';
    $request->filter = 'occaecati';
    $request->ids = 'quos';
    $request->page = 975752;
    $request->pagesize = 271653;
    $request->site = 'tempora';

    $response = $sdk->sdk->getUsersIdsReputationHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsSuggestedEdits

Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsSuggestedEditsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsSuggestedEditsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsSuggestedEditsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsSuggestedEditsRequest();
    $request->callback = 'voluptate';
    $request->filter = 'reiciendis';
    $request->fromdate = 401713;
    $request->ids = 'sit';
    $request->max = 'non';
    $request->min = 'officiis';
    $request->order = GetUsersIdsSuggestedEditsOrderEnum::ASC;
    $request->page = 708609;
    $request->pagesize = 310381;
    $request->site = 'incidunt';
    $request->sort = GetUsersIdsSuggestedEditsSortEnum::APPROVAL;
    $request->todate = 894864;

    $response = $sdk->sdk->getUsersIdsSuggestedEdits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsTags

Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tags.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsTagsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsTagsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsTagsRequest();
    $request->callback = 'rem';
    $request->filter = 'sit';
    $request->fromdate = 750595;
    $request->ids = 'error';
    $request->max = 'veniam';
    $request->min = 'minima';
    $request->order = GetUsersIdsTagsOrderEnum::ASC;
    $request->page = 967122;
    $request->pagesize = 862319;
    $request->site = 'magni';
    $request->sort = GetUsersIdsTagsSortEnum::POPULAR;
    $request->todate = 901483;

    $response = $sdk->sdk->getUsersIdsTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdsTimeline

Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdsTimelineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdsTimelineRequest();
    $request->callback = 'numquam';
    $request->filter = 'veniam';
    $request->fromdate = 446135;
    $request->ids = 'officiis';
    $request->page = 104627;
    $request->pagesize = 512452;
    $request->site = 'exercitationem';
    $request->todate = 510629;

    $response = $sdk->sdk->getUsersIdsTimeline($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdInboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdInboxRequest();
    $request->callback = 'cum';
    $request->filter = 'laboriosam';
    $request->id = 680515;
    $request->page = 530089;
    $request->pagesize = 622385;
    $request->site = 'hic';

    $response = $sdk->sdk->getUsersIdInbox($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdInboxUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdInboxUnreadRequest();
    $request->callback = 'expedita';
    $request->filter = 'debitis';
    $request->id = 204923;
    $request->page = 677115;
    $request->pagesize = 341698;
    $request->since = 639028;
    $request->site = 'dolorum';

    $response = $sdk->sdk->getUsersIdInboxUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdNotificationsRequest();
    $request->callback = 'corrupti';
    $request->filter = 'accusamus';
    $request->id = 272683;
    $request->page = 543678;
    $request->pagesize = 148268;
    $request->site = 'ut';

    $response = $sdk->sdk->getUsersIdNotifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdNotificationsUnreadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdNotificationsUnreadRequest();
    $request->callback = 'fugiat';
    $request->filter = 'voluptatem';
    $request->id = 635057;
    $request->page = 710337;
    $request->pagesize = 299643;
    $request->site = 'consequatur';

    $response = $sdk->sdk->getUsersIdNotificationsUnread($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdPrivileges

Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdPrivilegesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdPrivilegesRequest();
    $request->callback = 'esse';
    $request->filter = 'ipsam';
    $request->id = 24527;
    $request->page = 530537;
    $request->pagesize = 558065;
    $request->site = 'repudiandae';

    $response = $sdk->sdk->getUsersIdPrivileges($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdReputationHistoryFull

Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdReputationHistoryFullRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdReputationHistoryFullRequest();
    $request->callback = 'corporis';
    $request->filter = 'et';
    $request->id = 502710;
    $request->page = 405942;
    $request->pagesize = 153627;
    $request->site = 'sit';

    $response = $sdk->sdk->getUsersIdReputationHistoryFull($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTagsTagsTopAnswers

Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopAnswersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopAnswersOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopAnswersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTagsTagsTopAnswersRequest();
    $request->callback = 'vel';
    $request->filter = 'nostrum';
    $request->fromdate = 906172;
    $request->id = 622231;
    $request->max = 'consequatur';
    $request->min = 'incidunt';
    $request->order = GetUsersIdTagsTagsTopAnswersOrderEnum::ASC;
    $request->page = 209750;
    $request->pagesize = 690894;
    $request->site = 'dicta';
    $request->sort = GetUsersIdTagsTagsTopAnswersSortEnum::ACTIVITY;
    $request->tags = 'occaecati';
    $request->todate = 289776;

    $response = $sdk->sdk->getUsersIdTagsTagsTopAnswers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTagsTagsTopQuestions

Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopQuestionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopQuestionsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTagsTagsTopQuestionsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTagsTagsTopQuestionsRequest();
    $request->callback = 'quidem';
    $request->filter = 'atque';
    $request->fromdate = 671957;
    $request->id = 724148;
    $request->max = 'tenetur';
    $request->min = 'laboriosam';
    $request->order = GetUsersIdTagsTagsTopQuestionsOrderEnum::DESC;
    $request->page = 227084;
    $request->pagesize = 647197;
    $request->site = 'voluptate';
    $request->sort = GetUsersIdTagsTagsTopQuestionsSortEnum::CREATION;
    $request->tags = 'reiciendis';
    $request->todate = 588740;

    $response = $sdk->sdk->getUsersIdTagsTagsTopQuestions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTopAnswerTags

Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTopAnswerTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTopAnswerTagsRequest();
    $request->callback = 'repellendus';
    $request->filter = 'delectus';
    $request->id = 914791;
    $request->page = 16871;
    $request->pagesize = 667285;
    $request->site = 'quidem';

    $response = $sdk->sdk->getUsersIdTopAnswerTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdTopQuestionTags

Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdTopQuestionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdTopQuestionTagsRequest();
    $request->callback = 'reprehenderit';
    $request->filter = 'facere';
    $request->id = 685092;
    $request->page = 509807;
    $request->pagesize = 648598;
    $request->site = 'veniam';

    $response = $sdk->sdk->getUsersIdTopQuestionTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsersIdWritePermissions

Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersIdWritePermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersIdWritePermissionsRequest();
    $request->callback = 'voluptatem';
    $request->filter = 'quisquam';
    $request->id = 919532;
    $request->page = 97243;
    $request->pagesize = 542457;
    $request->site = 'reprehenderit';

    $response = $sdk->sdk->getUsersIdWritePermissions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommentsIdDelete

Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentsIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCommentsIdDeleteRequest();
    $request->callback = 'asperiores';
    $request->filter = 'totam';
    $request->id = 383103;
    $request->preview = false;
    $request->site = 'quidem';

    $response = $sdk->sdk->postCommentsIdDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCommentsIdEdit

Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCommentsIdEditRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCommentsIdEditRequest();
    $request->body = 'maxime';
    $request->callback = 'et';
    $request->filter = 'esse';
    $request->id = 227759;
    $request->preview = false;
    $request->site = 'assumenda';

    $response = $sdk->sdk->postCommentsIdEdit($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPostsIdCommentsAdd

Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPostsIdCommentsAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPostsIdCommentsAddRequest();
    $request->body = 'ea';
    $request->callback = 'atque';
    $request->filter = 'error';
    $request->id = 887265;
    $request->preview = false;
    $request->site = 'officiis';

    $response = $sdk->sdk->postPostsIdCommentsAdd($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
