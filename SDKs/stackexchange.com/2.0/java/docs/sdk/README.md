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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensRequest;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccessTokensAccessTokensRequest req = new GetAccessTokensAccessTokensRequest("nulla") {{
                callback = "corrupti";
                filter = "illum";
                page = 423655L;
                pagesize = 623564L;
            }};            

            GetAccessTokensAccessTokensResponse res = sdk.sdk.getAccessTokensAccessTokens(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccessTokensAccessTokensInvalidate

Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensInvalidateRequest;
import org.openapis.openapi.models.operations.GetAccessTokensAccessTokensInvalidateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccessTokensAccessTokensInvalidateRequest req = new GetAccessTokensAccessTokensInvalidateRequest("deserunt") {{
                callback = "suscipit";
                filter = "iure";
                page = 297534L;
                pagesize = 891773L;
            }};            

            GetAccessTokensAccessTokensInvalidateResponse res = sdk.sdk.getAccessTokensAccessTokensInvalidate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetAnswersRequest;
import org.openapis.openapi.models.operations.GetAnswersResponse;
import org.openapis.openapi.models.operations.GetAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnswersRequest req = new GetAnswersRequest("ipsa") {{
                callback = "delectus";
                filter = "tempora";
                fromdate = 383441L;
                max = "molestiae";
                min = "minus";
                order = GetAnswersOrderEnum.ASC;
                page = 528895L;
                pagesize = 479977L;
                sort = GetAnswersSortEnum.CREATION;
                todate = 392785L;
            }};            

            GetAnswersResponse res = sdk.sdk.getAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnswersIdsOrderEnum;
import org.openapis.openapi.models.operations.GetAnswersIdsRequest;
import org.openapis.openapi.models.operations.GetAnswersIdsResponse;
import org.openapis.openapi.models.operations.GetAnswersIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnswersIdsRequest req = new GetAnswersIdsRequest("recusandae", "temporibus") {{
                callback = "ab";
                filter = "quis";
                fromdate = 87129L;
                max = "deserunt";
                min = "perferendis";
                order = GetAnswersIdsOrderEnum.DESC;
                page = 832620L;
                pagesize = 957156L;
                sort = GetAnswersIdsSortEnum.VOTES;
                todate = 140350L;
            }};            

            GetAnswersIdsResponse res = sdk.sdk.getAnswersIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnswersIdsCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetAnswersIdsCommentsRequest;
import org.openapis.openapi.models.operations.GetAnswersIdsCommentsResponse;
import org.openapis.openapi.models.operations.GetAnswersIdsCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnswersIdsCommentsRequest req = new GetAnswersIdsCommentsRequest("at", "at") {{
                callback = "maiores";
                filter = "molestiae";
                fromdate = 799159L;
                max = "quod";
                min = "esse";
                order = GetAnswersIdsCommentsOrderEnum.ASC;
                page = 780529L;
                pagesize = 678880L;
                sort = GetAnswersIdsCommentsSortEnum.CREATION;
                todate = 720633L;
            }};            

            GetAnswersIdsCommentsResponse res = sdk.sdk.getAnswersIdsComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAccessTokensDeAuthenticate

Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAccessTokensDeAuthenticateRequest;
import org.openapis.openapi.models.operations.GetAppsAccessTokensDeAuthenticateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAccessTokensDeAuthenticateRequest req = new GetAppsAccessTokensDeAuthenticateRequest("officia") {{
                callback = "occaecati";
                filter = "fugit";
                page = 537373L;
                pagesize = 944669L;
            }};            

            GetAppsAccessTokensDeAuthenticateResponse res = sdk.sdk.getAppsAccessTokensDeAuthenticate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesOrderEnum;
import org.openapis.openapi.models.operations.GetBadgesRequest;
import org.openapis.openapi.models.operations.GetBadgesResponse;
import org.openapis.openapi.models.operations.GetBadgesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesRequest req = new GetBadgesRequest("optio") {{
                callback = "totam";
                filter = "beatae";
                fromdate = 414662L;
                inname = "molestiae";
                max = "modi";
                min = "qui";
                order = GetBadgesOrderEnum.ASC;
                page = 736918L;
                pagesize = 456150L;
                sort = GetBadgesSortEnum.RANK;
                todate = 568434L;
            }};            

            GetBadgesResponse res = sdk.sdk.getBadges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBadgesName

Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesNameOrderEnum;
import org.openapis.openapi.models.operations.GetBadgesNameRequest;
import org.openapis.openapi.models.operations.GetBadgesNameResponse;
import org.openapis.openapi.models.operations.GetBadgesNameSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesNameRequest req = new GetBadgesNameRequest("aspernatur") {{
                callback = "perferendis";
                filter = "ad";
                fromdate = 617636L;
                inname = "sed";
                max = "iste";
                min = "dolor";
                order = GetBadgesNameOrderEnum.ASC;
                page = 386489L;
                pagesize = 943749L;
                sort = GetBadgesNameSortEnum.NAME;
                todate = 681820L;
            }};            

            GetBadgesNameResponse res = sdk.sdk.getBadgesName(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBadgesRecipients

Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesRecipientsRequest;
import org.openapis.openapi.models.operations.GetBadgesRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesRecipientsRequest req = new GetBadgesRecipientsRequest("in") {{
                callback = "corporis";
                filter = "iste";
                fromdate = 437032L;
                page = 902349L;
                pagesize = 697631L;
                todate = 99280L;
            }};            

            GetBadgesRecipientsResponse res = sdk.sdk.getBadgesRecipients(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBadgesTags

Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesTagsOrderEnum;
import org.openapis.openapi.models.operations.GetBadgesTagsRequest;
import org.openapis.openapi.models.operations.GetBadgesTagsResponse;
import org.openapis.openapi.models.operations.GetBadgesTagsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesTagsRequest req = new GetBadgesTagsRequest("ipsa") {{
                callback = "reiciendis";
                filter = "est";
                fromdate = 653140L;
                inname = "laborum";
                max = "dolores";
                min = "dolorem";
                order = GetBadgesTagsOrderEnum.DESC;
                page = 128926L;
                pagesize = 750686L;
                sort = GetBadgesTagsSortEnum.RANK;
                todate = 607831L;
            }};            

            GetBadgesTagsResponse res = sdk.sdk.getBadgesTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesIdsOrderEnum;
import org.openapis.openapi.models.operations.GetBadgesIdsRequest;
import org.openapis.openapi.models.operations.GetBadgesIdsResponse;
import org.openapis.openapi.models.operations.GetBadgesIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesIdsRequest req = new GetBadgesIdsRequest("nemo", "minima") {{
                callback = "excepturi";
                filter = "accusantium";
                fromdate = 438601L;
                max = "culpa";
                min = "doloribus";
                order = GetBadgesIdsOrderEnum.ASC;
                page = 102044L;
                pagesize = 652790L;
                sort = GetBadgesIdsSortEnum.RANK;
                todate = 635059L;
            }};            

            GetBadgesIdsResponse res = sdk.sdk.getBadgesIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBadgesIdsRecipients

Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBadgesIdsRecipientsRequest;
import org.openapis.openapi.models.operations.GetBadgesIdsRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBadgesIdsRecipientsRequest req = new GetBadgesIdsRecipientsRequest("consequuntur", "repellat") {{
                callback = "mollitia";
                filter = "occaecati";
                fromdate = 253291L;
                page = 414369L;
                pagesize = 466311L;
                todate = 474697L;
            }};            

            GetBadgesIdsRecipientsResponse res = sdk.sdk.getBadgesIdsRecipients(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetCommentsRequest;
import org.openapis.openapi.models.operations.GetCommentsResponse;
import org.openapis.openapi.models.operations.GetCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentsRequest req = new GetCommentsRequest("velit") {{
                callback = "error";
                filter = "quia";
                fromdate = 338007L;
                max = "vitae";
                min = "laborum";
                order = GetCommentsOrderEnum.ASC;
                page = 317202L;
                pagesize = 138183L;
                sort = GetCommentsSortEnum.VOTES;
                todate = 196582L;
            }};            

            GetCommentsResponse res = sdk.sdk.getComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommentsIdsOrderEnum;
import org.openapis.openapi.models.operations.GetCommentsIdsRequest;
import org.openapis.openapi.models.operations.GetCommentsIdsResponse;
import org.openapis.openapi.models.operations.GetCommentsIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCommentsIdsRequest req = new GetCommentsIdsRequest("tenetur", "ipsam") {{
                callback = "id";
                filter = "possimus";
                fromdate = 13571L;
                max = "quasi";
                min = "error";
                order = GetCommentsIdsOrderEnum.ASC;
                page = 673660L;
                pagesize = 96098L;
                sort = GetCommentsIdsSortEnum.VOTES;
                todate = 976460L;
            }};            

            GetCommentsIdsResponse res = sdk.sdk.getCommentsIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getErrors

Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErrorsRequest;
import org.openapis.openapi.models.operations.GetErrorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErrorsRequest req = new GetErrorsRequest() {{
                callback = "vero";
                filter = "nihil";
                page = 509624L;
                pagesize = 976762L;
            }};            

            GetErrorsResponse res = sdk.sdk.getErrors(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getErrorsId

This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErrorsIdRequest;
import org.openapis.openapi.models.operations.GetErrorsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErrorsIdRequest req = new GetErrorsIdRequest(55714L);            

            GetErrorsIdResponse res = sdk.sdk.getErrorsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest("omnis") {{
                callback = "voluptate";
                filter = "cum";
                page = 19987L;
                pagesize = 39187L;
                since = 441711L;
            }};            

            GetEventsResponse res = sdk.sdk.getEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFiltersCreateRequest;
import org.openapis.openapi.models.operations.GetFiltersCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFiltersCreateRequest req = new GetFiltersCreateRequest() {{
                base = "ut";
                exclude = "maiores";
                include = "dicta";
                unsafe = false;
            }};            

            GetFiltersCreateResponse res = sdk.sdk.getFiltersCreate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFiltersFilters

Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFiltersFiltersRequest;
import org.openapis.openapi.models.operations.GetFiltersFiltersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFiltersFiltersRequest req = new GetFiltersFiltersRequest("corporis");            

            GetFiltersFiltersResponse res = sdk.sdk.getFiltersFilters(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxRequest;
import org.openapis.openapi.models.operations.GetInboxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxRequest req = new GetInboxRequest() {{
                callback = "dolore";
                filter = "iusto";
                page = 118727L;
                pagesize = 688661L;
            }};            

            GetInboxResponse res = sdk.sdk.getInbox(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxUnreadRequest;
import org.openapis.openapi.models.operations.GetInboxUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxUnreadRequest req = new GetInboxUnreadRequest() {{
                callback = "enim";
                filter = "accusamus";
                page = 414263L;
                pagesize = 918236L;
                since = 64147L;
            }};            

            GetInboxUnreadResponse res = sdk.sdk.getInboxUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInfo

Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInfoRequest;
import org.openapis.openapi.models.operations.GetInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInfoRequest req = new GetInfoRequest("ipsum");            

            GetInfoResponse res = sdk.sdk.getInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMe

Returns the user associated with the passed access_token.
 
This method returns a user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeOrderEnum;
import org.openapis.openapi.models.operations.GetMeRequest;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.operations.GetMeSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeRequest req = new GetMeRequest("quidem") {{
                callback = "molestias";
                filter = "excepturi";
                fromdate = 865103L;
                max = "modi";
                min = "praesentium";
                order = GetMeOrderEnum.ASC;
                page = 916723L;
                pagesize = 93940L;
                sort = GetMeSortEnum.MODIFIED;
                todate = 575947L;
            }};            

            GetMeResponse res = sdk.sdk.getMe(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeAnswers

Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetMeAnswersRequest;
import org.openapis.openapi.models.operations.GetMeAnswersResponse;
import org.openapis.openapi.models.operations.GetMeAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeAnswersRequest req = new GetMeAnswersRequest("veritatis") {{
                callback = "itaque";
                filter = "incidunt";
                fromdate = 318569L;
                max = "consequatur";
                min = "est";
                order = GetMeAnswersOrderEnum.ASC;
                page = 131797L;
                pagesize = 647174L;
                sort = GetMeAnswersSortEnum.VOTES;
                todate = 841386L;
            }};            

            GetMeAnswersResponse res = sdk.sdk.getMeAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeAssociated

Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeAssociatedRequest;
import org.openapis.openapi.models.operations.GetMeAssociatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeAssociatedRequest req = new GetMeAssociatedRequest() {{
                callback = "labore";
                filter = "modi";
                page = 183191L;
                pagesize = 397821L;
            }};            

            GetMeAssociatedResponse res = sdk.sdk.getMeAssociated(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeBadges

Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeBadgesOrderEnum;
import org.openapis.openapi.models.operations.GetMeBadgesRequest;
import org.openapis.openapi.models.operations.GetMeBadgesResponse;
import org.openapis.openapi.models.operations.GetMeBadgesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeBadgesRequest req = new GetMeBadgesRequest("cupiditate") {{
                callback = "quos";
                filter = "perferendis";
                fromdate = 164940L;
                max = "assumenda";
                min = "ipsam";
                order = GetMeBadgesOrderEnum.DESC;
                page = 146441L;
                pagesize = 677817L;
                sort = GetMeBadgesSortEnum.NAME;
                todate = 270008L;
            }};            

            GetMeBadgesResponse res = sdk.sdk.getMeBadges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeComments

Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetMeCommentsRequest;
import org.openapis.openapi.models.operations.GetMeCommentsResponse;
import org.openapis.openapi.models.operations.GetMeCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeCommentsRequest req = new GetMeCommentsRequest("facilis") {{
                callback = "tempore";
                filter = "labore";
                fromdate = 962189L;
                max = "eum";
                min = "non";
                order = GetMeCommentsOrderEnum.ASC;
                page = 576157L;
                pagesize = 396098L;
                sort = GetMeCommentsSortEnum.VOTES;
                todate = 896039L;
            }};            

            GetMeCommentsResponse res = sdk.sdk.getMeComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeCommentsToId

Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeCommentsToIdOrderEnum;
import org.openapis.openapi.models.operations.GetMeCommentsToIdRequest;
import org.openapis.openapi.models.operations.GetMeCommentsToIdResponse;
import org.openapis.openapi.models.operations.GetMeCommentsToIdSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeCommentsToIdRequest req = new GetMeCommentsToIdRequest("sint", 638921L) {{
                callback = "dolor";
                filter = "debitis";
                fromdate = 952749L;
                max = "dolorum";
                min = "in";
                order = GetMeCommentsToIdOrderEnum.DESC;
                page = 846409L;
                pagesize = 978571L;
                sort = GetMeCommentsToIdSortEnum.VOTES;
                todate = 116202L;
            }};            

            GetMeCommentsToIdResponse res = sdk.sdk.getMeCommentsToId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeFavorites

Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeFavoritesOrderEnum;
import org.openapis.openapi.models.operations.GetMeFavoritesRequest;
import org.openapis.openapi.models.operations.GetMeFavoritesResponse;
import org.openapis.openapi.models.operations.GetMeFavoritesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeFavoritesRequest req = new GetMeFavoritesRequest("magnam") {{
                callback = "cumque";
                filter = "facere";
                fromdate = 411820L;
                max = "aliquid";
                min = "laborum";
                order = GetMeFavoritesOrderEnum.ASC;
                page = 249796L;
                pagesize = 581273L;
                sort = GetMeFavoritesSortEnum.CREATION;
                todate = 881736L;
            }};            

            GetMeFavoritesResponse res = sdk.sdk.getMeFavorites(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeInbox

Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeInboxRequest;
import org.openapis.openapi.models.operations.GetMeInboxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeInboxRequest req = new GetMeInboxRequest("delectus") {{
                callback = "quidem";
                filter = "provident";
                page = 725255L;
                pagesize = 659669L;
            }};            

            GetMeInboxResponse res = sdk.sdk.getMeInbox(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeInboxUnread

Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeInboxUnreadRequest;
import org.openapis.openapi.models.operations.GetMeInboxUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeInboxUnreadRequest req = new GetMeInboxUnreadRequest("blanditiis") {{
                callback = "deleniti";
                filter = "sapiente";
                page = 230533L;
                pagesize = 643990L;
                since = 394869L;
            }};            

            GetMeInboxUnreadResponse res = sdk.sdk.getMeInboxUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeMentioned

Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeMentionedOrderEnum;
import org.openapis.openapi.models.operations.GetMeMentionedRequest;
import org.openapis.openapi.models.operations.GetMeMentionedResponse;
import org.openapis.openapi.models.operations.GetMeMentionedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeMentionedRequest req = new GetMeMentionedRequest("vel") {{
                callback = "natus";
                filter = "omnis";
                fromdate = 474867L;
                max = "perferendis";
                min = "nihil";
                order = GetMeMentionedOrderEnum.DESC;
                page = 716075L;
                pagesize = 660174L;
                sort = GetMeMentionedSortEnum.CREATION;
                todate = 290077L;
            }};            

            GetMeMentionedResponse res = sdk.sdk.getMeMentioned(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeMergesRequest;
import org.openapis.openapi.models.operations.GetMeMergesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeMergesRequest req = new GetMeMergesRequest() {{
                callback = "suscipit";
                filter = "natus";
                page = 749170L;
                pagesize = 428769L;
            }};            

            GetMeMergesResponse res = sdk.sdk.getMeMerges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeNotifications

Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeNotificationsRequest;
import org.openapis.openapi.models.operations.GetMeNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeNotificationsRequest req = new GetMeNotificationsRequest("vero") {{
                callback = "aspernatur";
                filter = "architecto";
                page = 298282L;
                pagesize = 92373L;
            }};            

            GetMeNotificationsResponse res = sdk.sdk.getMeNotifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeNotificationsUnread

Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeNotificationsUnreadRequest;
import org.openapis.openapi.models.operations.GetMeNotificationsUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeNotificationsUnreadRequest req = new GetMeNotificationsUnreadRequest("excepturi") {{
                callback = "ullam";
                filter = "provident";
                page = 551816L;
                pagesize = 574325L;
            }};            

            GetMeNotificationsUnreadResponse res = sdk.sdk.getMeNotificationsUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMePrivileges

Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMePrivilegesRequest;
import org.openapis.openapi.models.operations.GetMePrivilegesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMePrivilegesRequest req = new GetMePrivilegesRequest("accusantium") {{
                callback = "mollitia";
                filter = "reiciendis";
                page = 652103L;
                pagesize = 320997L;
            }};            

            GetMePrivilegesResponse res = sdk.sdk.getMePrivileges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeQuestions

Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeQuestionsOrderEnum;
import org.openapis.openapi.models.operations.GetMeQuestionsRequest;
import org.openapis.openapi.models.operations.GetMeQuestionsResponse;
import org.openapis.openapi.models.operations.GetMeQuestionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeQuestionsRequest req = new GetMeQuestionsRequest("eum") {{
                callback = "dolor";
                filter = "necessitatibus";
                fromdate = 141264L;
                max = "nemo";
                min = "quasi";
                order = GetMeQuestionsOrderEnum.DESC;
                page = 984043L;
                pagesize = 891924L;
                sort = GetMeQuestionsSortEnum.ACTIVITY;
                todate = 806194L;
            }};            

            GetMeQuestionsResponse res = sdk.sdk.getMeQuestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeQuestionsFeatured

Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeQuestionsFeaturedOrderEnum;
import org.openapis.openapi.models.operations.GetMeQuestionsFeaturedRequest;
import org.openapis.openapi.models.operations.GetMeQuestionsFeaturedResponse;
import org.openapis.openapi.models.operations.GetMeQuestionsFeaturedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeQuestionsFeaturedRequest req = new GetMeQuestionsFeaturedRequest("deleniti") {{
                callback = "facilis";
                filter = "in";
                fromdate = 100226L;
                max = "architecto";
                min = "repudiandae";
                order = GetMeQuestionsFeaturedOrderEnum.DESC;
                page = 714242L;
                pagesize = 469249L;
                sort = GetMeQuestionsFeaturedSortEnum.VOTES;
                todate = 841140L;
            }};            

            GetMeQuestionsFeaturedResponse res = sdk.sdk.getMeQuestionsFeatured(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeQuestionsNoAnswers

Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeQuestionsNoAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetMeQuestionsNoAnswersRequest;
import org.openapis.openapi.models.operations.GetMeQuestionsNoAnswersResponse;
import org.openapis.openapi.models.operations.GetMeQuestionsNoAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeQuestionsNoAnswersRequest req = new GetMeQuestionsNoAnswersRequest("sed") {{
                callback = "saepe";
                filter = "pariatur";
                fromdate = 37559L;
                max = "consequuntur";
                min = "praesentium";
                order = GetMeQuestionsNoAnswersOrderEnum.ASC;
                page = 166847L;
                pagesize = 123820L;
                sort = GetMeQuestionsNoAnswersSortEnum.VOTES;
                todate = 848009L;
            }};            

            GetMeQuestionsNoAnswersResponse res = sdk.sdk.getMeQuestionsNoAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeQuestionsUnaccepted

Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeQuestionsUnacceptedOrderEnum;
import org.openapis.openapi.models.operations.GetMeQuestionsUnacceptedRequest;
import org.openapis.openapi.models.operations.GetMeQuestionsUnacceptedResponse;
import org.openapis.openapi.models.operations.GetMeQuestionsUnacceptedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeQuestionsUnacceptedRequest req = new GetMeQuestionsUnacceptedRequest("pariatur") {{
                callback = "maxime";
                filter = "ea";
                fromdate = 569101L;
                max = "odit";
                min = "ea";
                order = GetMeQuestionsUnacceptedOrderEnum.DESC;
                page = 69167L;
                pagesize = 982575L;
                sort = GetMeQuestionsUnacceptedSortEnum.VOTES;
                todate = 373291L;
            }};            

            GetMeQuestionsUnacceptedResponse res = sdk.sdk.getMeQuestionsUnaccepted(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeQuestionsUnanswered

Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeQuestionsUnansweredOrderEnum;
import org.openapis.openapi.models.operations.GetMeQuestionsUnansweredRequest;
import org.openapis.openapi.models.operations.GetMeQuestionsUnansweredResponse;
import org.openapis.openapi.models.operations.GetMeQuestionsUnansweredSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeQuestionsUnansweredRequest req = new GetMeQuestionsUnansweredRequest("voluptate") {{
                callback = "autem";
                filter = "nam";
                fromdate = 50588L;
                max = "pariatur";
                min = "nemo";
                order = GetMeQuestionsUnansweredOrderEnum.ASC;
                page = 16627L;
                pagesize = 855804L;
                sort = GetMeQuestionsUnansweredSortEnum.ACTIVITY;
                todate = 11714L;
            }};            

            GetMeQuestionsUnansweredResponse res = sdk.sdk.getMeQuestionsUnanswered(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeReputation

Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeReputationRequest;
import org.openapis.openapi.models.operations.GetMeReputationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeReputationRequest req = new GetMeReputationRequest("cumque") {{
                callback = "corporis";
                filter = "hic";
            }};            

            GetMeReputationResponse res = sdk.sdk.getMeReputation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeReputationHistory

Returns user's public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeReputationHistoryRequest;
import org.openapis.openapi.models.operations.GetMeReputationHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeReputationHistoryRequest req = new GetMeReputationHistoryRequest("libero") {{
                callback = "nobis";
                filter = "dolores";
                page = 339404L;
                pagesize = 521037L;
            }};            

            GetMeReputationHistoryResponse res = sdk.sdk.getMeReputationHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeReputationHistoryFull

Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeReputationHistoryFullRequest;
import org.openapis.openapi.models.operations.GetMeReputationHistoryFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeReputationHistoryFullRequest req = new GetMeReputationHistoryFullRequest("dignissimos") {{
                callback = "eaque";
                filter = "quis";
                page = 199996L;
                pagesize = 179490L;
            }};            

            GetMeReputationHistoryFullResponse res = sdk.sdk.getMeReputationHistoryFull(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeSuggestedEdits

Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeSuggestedEditsOrderEnum;
import org.openapis.openapi.models.operations.GetMeSuggestedEditsRequest;
import org.openapis.openapi.models.operations.GetMeSuggestedEditsResponse;
import org.openapis.openapi.models.operations.GetMeSuggestedEditsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeSuggestedEditsRequest req = new GetMeSuggestedEditsRequest("perferendis") {{
                callback = "dolores";
                filter = "minus";
                fromdate = 463451L;
                max = "dolor";
                min = "vero";
                order = GetMeSuggestedEditsOrderEnum.DESC;
                page = 944120L;
                pagesize = 928082L;
                sort = GetMeSuggestedEditsSortEnum.APPROVAL;
                todate = 704415L;
            }};            

            GetMeSuggestedEditsResponse res = sdk.sdk.getMeSuggestedEdits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTags

Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTagsOrderEnum;
import org.openapis.openapi.models.operations.GetMeTagsRequest;
import org.openapis.openapi.models.operations.GetMeTagsResponse;
import org.openapis.openapi.models.operations.GetMeTagsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTagsRequest req = new GetMeTagsRequest("perspiciatis") {{
                callback = "voluptatem";
                filter = "porro";
                fromdate = 164694L;
                max = "blanditiis";
                min = "error";
                order = GetMeTagsOrderEnum.DESC;
                page = 577229L;
                pagesize = 699098L;
                sort = GetMeTagsSortEnum.POPULAR;
                todate = 992397L;
            }};            

            GetMeTagsResponse res = sdk.sdk.getMeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTagsTagsTopAnswers

Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopAnswersRequest;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopAnswersResponse;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTagsTagsTopAnswersRequest req = new GetMeTagsTagsTopAnswersRequest("earum", "modi") {{
                callback = "iste";
                filter = "dolorum";
                fromdate = 535633L;
                max = "pariatur";
                min = "provident";
                order = GetMeTagsTagsTopAnswersOrderEnum.ASC;
                page = 730122L;
                pagesize = 964490L;
                sort = GetMeTagsTagsTopAnswersSortEnum.ACTIVITY;
                todate = 554242L;
            }};            

            GetMeTagsTagsTopAnswersResponse res = sdk.sdk.getMeTagsTagsTopAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTagsTagsTopQuestions

Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopQuestionsOrderEnum;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopQuestionsRequest;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopQuestionsResponse;
import org.openapis.openapi.models.operations.GetMeTagsTagsTopQuestionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTagsTagsTopQuestionsRequest req = new GetMeTagsTagsTopQuestionsRequest("aliquid", "dolorem") {{
                callback = "dolorem";
                filter = "dolor";
                fromdate = 186193L;
                max = "ipsum";
                min = "hic";
                order = GetMeTagsTagsTopQuestionsOrderEnum.ASC;
                page = 739551L;
                pagesize = 452109L;
                sort = GetMeTagsTagsTopQuestionsSortEnum.HOT;
                todate = 970237L;
            }};            

            GetMeTagsTagsTopQuestionsResponse res = sdk.sdk.getMeTagsTagsTopQuestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTimeline

Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTimelineRequest;
import org.openapis.openapi.models.operations.GetMeTimelineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTimelineRequest req = new GetMeTimelineRequest("amet") {{
                callback = "dolorum";
                filter = "numquam";
                fromdate = 85295L;
                page = 58029L;
                pagesize = 56418L;
                todate = 434417L;
            }};            

            GetMeTimelineResponse res = sdk.sdk.getMeTimeline(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTopAnswerTags

Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTopAnswerTagsRequest;
import org.openapis.openapi.models.operations.GetMeTopAnswerTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTopAnswerTagsRequest req = new GetMeTopAnswerTagsRequest("odio") {{
                callback = "quaerat";
                filter = "accusamus";
                page = 696344L;
                pagesize = 976405L;
            }};            

            GetMeTopAnswerTagsResponse res = sdk.sdk.getMeTopAnswerTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeTopQuestionTags

Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeTopQuestionTagsRequest;
import org.openapis.openapi.models.operations.GetMeTopQuestionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeTopQuestionTagsRequest req = new GetMeTopQuestionTagsRequest("voluptas") {{
                callback = "natus";
                filter = "eos";
                page = 542499L;
                pagesize = 24678L;
            }};            

            GetMeTopQuestionTagsResponse res = sdk.sdk.getMeTopQuestionTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMeWritePermissions

Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeWritePermissionsRequest;
import org.openapis.openapi.models.operations.GetMeWritePermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeWritePermissionsRequest req = new GetMeWritePermissionsRequest("fugiat") {{
                callback = "ab";
                filter = "soluta";
                page = 679393L;
                pagesize = 478596L;
            }};            

            GetMeWritePermissionsResponse res = sdk.sdk.getMeWritePermissions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsRequest;
import org.openapis.openapi.models.operations.GetNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNotificationsRequest req = new GetNotificationsRequest() {{
                callback = "voluptate";
                filter = "dolorum";
                page = 536579L;
                pagesize = 607045L;
            }};            

            GetNotificationsResponse res = sdk.sdk.getNotifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationsUnreadRequest;
import org.openapis.openapi.models.operations.GetNotificationsUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNotificationsUnreadRequest req = new GetNotificationsUnreadRequest() {{
                callback = "necessitatibus";
                filter = "distinctio";
                page = 990339L;
                pagesize = 469497L;
            }};            

            GetNotificationsUnreadResponse res = sdk.sdk.getNotificationsUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsOrderEnum;
import org.openapis.openapi.models.operations.GetPostsRequest;
import org.openapis.openapi.models.operations.GetPostsResponse;
import org.openapis.openapi.models.operations.GetPostsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsRequest req = new GetPostsRequest("ipsum") {{
                callback = "voluptate";
                filter = "id";
                fromdate = 906418L;
                max = "eius";
                min = "aspernatur";
                order = GetPostsOrderEnum.DESC;
                page = 229219L;
                pagesize = 758379L;
                sort = GetPostsSortEnum.VOTES;
                todate = 320017L;
            }};            

            GetPostsResponse res = sdk.sdk.getPosts(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsIdsOrderEnum;
import org.openapis.openapi.models.operations.GetPostsIdsRequest;
import org.openapis.openapi.models.operations.GetPostsIdsResponse;
import org.openapis.openapi.models.operations.GetPostsIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsIdsRequest req = new GetPostsIdsRequest("saepe", "suscipit") {{
                callback = "deserunt";
                filter = "provident";
                fromdate = 324683L;
                max = "repellendus";
                min = "totam";
                order = GetPostsIdsOrderEnum.ASC;
                page = 55L;
                pagesize = 872651L;
                sort = GetPostsIdsSortEnum.ACTIVITY;
                todate = 273542L;
            }};            

            GetPostsIdsResponse res = sdk.sdk.getPostsIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsIdsCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetPostsIdsCommentsRequest;
import org.openapis.openapi.models.operations.GetPostsIdsCommentsResponse;
import org.openapis.openapi.models.operations.GetPostsIdsCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsIdsCommentsRequest req = new GetPostsIdsCommentsRequest("vel", "quod") {{
                callback = "officiis";
                filter = "qui";
                fromdate = 679880L;
                max = "a";
                min = "esse";
                order = GetPostsIdsCommentsOrderEnum.ASC;
                page = 483409L;
                pagesize = 215507L;
                sort = GetPostsIdsCommentsSortEnum.VOTES;
                todate = 947371L;
            }};            

            GetPostsIdsCommentsResponse res = sdk.sdk.getPostsIdsComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPostsIdsRevisions

Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsIdsRevisionsRequest;
import org.openapis.openapi.models.operations.GetPostsIdsRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsIdsRevisionsRequest req = new GetPostsIdsRevisionsRequest("amet", "tempore") {{
                callback = "accusamus";
                filter = "numquam";
                fromdate = 313692L;
                page = 213312L;
                pagesize = 957451L;
                todate = 518201L;
            }};            

            GetPostsIdsRevisionsResponse res = sdk.sdk.getPostsIdsRevisions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPostsIdsSuggestedEditsOrderEnum;
import org.openapis.openapi.models.operations.GetPostsIdsSuggestedEditsRequest;
import org.openapis.openapi.models.operations.GetPostsIdsSuggestedEditsResponse;
import org.openapis.openapi.models.operations.GetPostsIdsSuggestedEditsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPostsIdsSuggestedEditsRequest req = new GetPostsIdsSuggestedEditsRequest("nihil", "sit") {{
                callback = "expedita";
                filter = "neque";
                fromdate = 153694L;
                max = "vel";
                min = "libero";
                order = GetPostsIdsSuggestedEditsOrderEnum.DESC;
                page = 646265L;
                pagesize = 463575L;
                sort = GetPostsIdsSuggestedEditsSortEnum.CREATION;
                todate = 277628L;
            }};            

            GetPostsIdsSuggestedEditsResponse res = sdk.sdk.getPostsIdsSuggestedEdits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPrivileges

Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrivilegesRequest;
import org.openapis.openapi.models.operations.GetPrivilegesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrivilegesRequest req = new GetPrivilegesRequest("qui") {{
                callback = "cupiditate";
                filter = "maxime";
                page = 863856L;
                pagesize = 747080L;
            }};            

            GetPrivilegesResponse res = sdk.sdk.getPrivileges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsRequest;
import org.openapis.openapi.models.operations.GetQuestionsResponse;
import org.openapis.openapi.models.operations.GetQuestionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsRequest req = new GetQuestionsRequest("dicta") {{
                callback = "laborum";
                filter = "totam";
                fromdate = 276894L;
                max = "aspernatur";
                min = "dolores";
                order = GetQuestionsOrderEnum.ASC;
                page = 704474L;
                pagesize = 396060L;
                sort = GetQuestionsSortEnum.HOT;
                tagged = "molestias";
                todate = 840429L;
            }};            

            GetQuestionsResponse res = sdk.sdk.getQuestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsFeaturedOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsFeaturedRequest;
import org.openapis.openapi.models.operations.GetQuestionsFeaturedResponse;
import org.openapis.openapi.models.operations.GetQuestionsFeaturedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsFeaturedRequest req = new GetQuestionsFeaturedRequest("qui") {{
                callback = "neque";
                filter = "fugit";
                fromdate = 164959L;
                max = "odio";
                min = "sunt";
                order = GetQuestionsFeaturedOrderEnum.DESC;
                page = 722081L;
                pagesize = 940432L;
                sort = GetQuestionsFeaturedSortEnum.ACTIVITY;
                tagged = "cumque";
                todate = 746994L;
            }};            

            GetQuestionsFeaturedResponse res = sdk.sdk.getQuestionsFeatured(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsNoAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsNoAnswersRequest;
import org.openapis.openapi.models.operations.GetQuestionsNoAnswersResponse;
import org.openapis.openapi.models.operations.GetQuestionsNoAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsNoAnswersRequest req = new GetQuestionsNoAnswersRequest("nobis") {{
                callback = "et";
                filter = "saepe";
                fromdate = 217450L;
                max = "veritatis";
                min = "nobis";
                order = GetQuestionsNoAnswersOrderEnum.ASC;
                page = 731694L;
                pagesize = 584476L;
                sort = GetQuestionsNoAnswersSortEnum.ACTIVITY;
                tagged = "delectus";
                todate = 209157L;
            }};            

            GetQuestionsNoAnswersResponse res = sdk.sdk.getQuestionsNoAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsUnansweredOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsUnansweredRequest;
import org.openapis.openapi.models.operations.GetQuestionsUnansweredResponse;
import org.openapis.openapi.models.operations.GetQuestionsUnansweredSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsUnansweredRequest req = new GetQuestionsUnansweredRequest("dolore") {{
                callback = "labore";
                filter = "adipisci";
                fromdate = 677263L;
                max = "architecto";
                min = "quae";
                order = GetQuestionsUnansweredOrderEnum.DESC;
                page = 555649L;
                pagesize = 929530L;
                sort = GetQuestionsUnansweredSortEnum.ACTIVITY;
                tagged = "est";
                todate = 833038L;
            }};            

            GetQuestionsUnansweredResponse res = sdk.sdk.getQuestionsUnanswered(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsIdsRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsResponse;
import org.openapis.openapi.models.operations.GetQuestionsIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsRequest req = new GetQuestionsIdsRequest("porro", "doloribus") {{
                callback = "ut";
                filter = "facilis";
                fromdate = 586410L;
                max = "qui";
                min = "quae";
                order = GetQuestionsIdsOrderEnum.ASC;
                page = 485628L;
                pagesize = 580447L;
                sort = GetQuestionsIdsSortEnum.VOTES;
                todate = 787542L;
            }};            

            GetQuestionsIdsResponse res = sdk.sdk.getQuestionsIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsIdsAnswersRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsAnswersResponse;
import org.openapis.openapi.models.operations.GetQuestionsIdsAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsAnswersRequest req = new GetQuestionsIdsAnswersRequest("vero", "omnis") {{
                callback = "quis";
                filter = "ipsum";
                fromdate = 961571L;
                max = "voluptate";
                min = "consectetur";
                order = GetQuestionsIdsAnswersOrderEnum.ASC;
                page = 949319L;
                pagesize = 492268L;
                sort = GetQuestionsIdsAnswersSortEnum.VOTES;
                todate = 715561L;
            }};            

            GetQuestionsIdsAnswersResponse res = sdk.sdk.getQuestionsIdsAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsIdsCommentsRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsCommentsResponse;
import org.openapis.openapi.models.operations.GetQuestionsIdsCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsCommentsRequest req = new GetQuestionsIdsCommentsRequest("quod", "odio") {{
                callback = "similique";
                filter = "facilis";
                fromdate = 874288L;
                max = "ducimus";
                min = "dolore";
                order = GetQuestionsIdsCommentsOrderEnum.ASC;
                page = 848944L;
                pagesize = 194342L;
                sort = GetQuestionsIdsCommentsSortEnum.VOTES;
                todate = 773326L;
            }};            

            GetQuestionsIdsCommentsResponse res = sdk.sdk.getQuestionsIdsComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsLinkedOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsIdsLinkedRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsLinkedResponse;
import org.openapis.openapi.models.operations.GetQuestionsIdsLinkedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsLinkedRequest req = new GetQuestionsIdsLinkedRequest("aut", "voluptatibus") {{
                callback = "exercitationem";
                filter = "nulla";
                fromdate = 148141L;
                max = "porro";
                min = "maiores";
                order = GetQuestionsIdsLinkedOrderEnum.ASC;
                page = 478370L;
                pagesize = 753570L;
                sort = GetQuestionsIdsLinkedSortEnum.CREATION;
                todate = 4048L;
            }};            

            GetQuestionsIdsLinkedResponse res = sdk.sdk.getQuestionsIdsLinked(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsRelatedOrderEnum;
import org.openapis.openapi.models.operations.GetQuestionsIdsRelatedRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsRelatedResponse;
import org.openapis.openapi.models.operations.GetQuestionsIdsRelatedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsRelatedRequest req = new GetQuestionsIdsRelatedRequest("officia", "tempora") {{
                callback = "ipsam";
                filter = "ea";
                fromdate = 136900L;
                max = "vel";
                min = "possimus";
                order = GetQuestionsIdsRelatedOrderEnum.DESC;
                page = 189848L;
                pagesize = 401132L;
                sort = GetQuestionsIdsRelatedSortEnum.VOTES;
                todate = 120657L;
            }};            

            GetQuestionsIdsRelatedResponse res = sdk.sdk.getQuestionsIdsRelated(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuestionsIdsTimeline

Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsIdsTimelineRequest;
import org.openapis.openapi.models.operations.GetQuestionsIdsTimelineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuestionsIdsTimelineRequest req = new GetQuestionsIdsTimelineRequest("dolor", "maiores") {{
                callback = "quasi";
                filter = "ex";
                fromdate = 862192L;
                page = 569211L;
                pagesize = 972920L;
                todate = 343605L;
            }};            

            GetQuestionsIdsTimelineResponse res = sdk.sdk.getQuestionsIdsTimeline(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevisionsIds

Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRevisionsIdsRequest;
import org.openapis.openapi.models.operations.GetRevisionsIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRevisionsIdsRequest req = new GetRevisionsIdsRequest("sapiente", "quisquam") {{
                callback = "saepe";
                filter = "ea";
                fromdate = 774048L;
                page = 359271L;
                pagesize = 333145L;
                todate = 399499L;
            }};            

            GetRevisionsIdsResponse res = sdk.sdk.getRevisionsIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchOrderEnum;
import org.openapis.openapi.models.operations.GetSearchRequest;
import org.openapis.openapi.models.operations.GetSearchResponse;
import org.openapis.openapi.models.operations.GetSearchSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchRequest req = new GetSearchRequest("inventore") {{
                callback = "magnam";
                filter = "ea";
                fromdate = 775220L;
                intitle = "consectetur";
                max = "recusandae";
                min = "aspernatur";
                nottagged = "minima";
                order = GetSearchOrderEnum.DESC;
                page = 952871L;
                pagesize = 725595L;
                sort = GetSearchSortEnum.ACTIVITY;
                tagged = "aut";
                todate = 533466L;
            }};            

            GetSearchResponse res = sdk.sdk.getSearch(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchAdvancedAcceptedEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedClosedEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedMigratedEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedNoticeEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedOrderEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedRequest;
import org.openapis.openapi.models.operations.GetSearchAdvancedResponse;
import org.openapis.openapi.models.operations.GetSearchAdvancedSortEnum;
import org.openapis.openapi.models.operations.GetSearchAdvancedWikiEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSearchAdvancedRequest req = new GetSearchAdvancedRequest("impedit") {{
                accepted = GetSearchAdvancedAcceptedEnum.TRUE;
                answers = 146946L;
                body = "accusamus";
                callback = "inventore";
                closed = GetSearchAdvancedClosedEnum.TRUE;
                filter = "et";
                fromdate = 677412L;
                max = "laborum";
                migrated = GetSearchAdvancedMigratedEnum.FALSE;
                min = "velit";
                notice = GetSearchAdvancedNoticeEnum.TRUE;
                nottagged = "autem";
                order = GetSearchAdvancedOrderEnum.ASC;
                page = 557369L;
                pagesize = 829603L;
                q = "nulla";
                sort = GetSearchAdvancedSortEnum.CREATION;
                tagged = "libero";
                title = "Mr.";
                todate = 270328L;
                url = "numquam";
                user = 131482L;
                views = 591935L;
                wiki = GetSearchAdvancedWikiEnum.TRUE;
            }};            

            GetSearchAdvancedResponse res = sdk.sdk.getSearchAdvanced(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimilarOrderEnum;
import org.openapis.openapi.models.operations.GetSimilarRequest;
import org.openapis.openapi.models.operations.GetSimilarResponse;
import org.openapis.openapi.models.operations.GetSimilarSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimilarRequest req = new GetSimilarRequest("molestiae") {{
                callback = "magnam";
                filter = "odio";
                fromdate = 262118L;
                max = "esse";
                min = "esse";
                nottagged = "rem";
                order = GetSimilarOrderEnum.ASC;
                page = 442015L;
                pagesize = 695626L;
                sort = GetSimilarSortEnum.RELEVANCE;
                tagged = "ut";
                title = "Ms.";
                todate = 379927L;
            }};            

            GetSimilarResponse res = sdk.sdk.getSimilar(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSites

Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesRequest;
import org.openapis.openapi.models.operations.GetSitesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSitesRequest req = new GetSitesRequest() {{
                callback = "assumenda";
                filter = "eos";
                page = 509342L;
                pagesize = 788546L;
            }};            

            GetSitesResponse res = sdk.sdk.getSites(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuggestedEditsOrderEnum;
import org.openapis.openapi.models.operations.GetSuggestedEditsRequest;
import org.openapis.openapi.models.operations.GetSuggestedEditsResponse;
import org.openapis.openapi.models.operations.GetSuggestedEditsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuggestedEditsRequest req = new GetSuggestedEditsRequest("veritatis") {{
                callback = "ipsa";
                filter = "id";
                fromdate = 696997L;
                max = "neque";
                min = "quo";
                order = GetSuggestedEditsOrderEnum.ASC;
                page = 777408L;
                pagesize = 681359L;
                sort = GetSuggestedEditsSortEnum.CREATION;
                todate = 178367L;
            }};            

            GetSuggestedEditsResponse res = sdk.sdk.getSuggestedEdits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSuggestedEditsIdsOrderEnum;
import org.openapis.openapi.models.operations.GetSuggestedEditsIdsRequest;
import org.openapis.openapi.models.operations.GetSuggestedEditsIdsResponse;
import org.openapis.openapi.models.operations.GetSuggestedEditsIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSuggestedEditsIdsRequest req = new GetSuggestedEditsIdsRequest("voluptas", "ab") {{
                callback = "cupiditate";
                filter = "consequatur";
                fromdate = 272822L;
                max = "debitis";
                min = "ipsam";
                order = GetSuggestedEditsIdsOrderEnum.DESC;
                page = 197054L;
                pagesize = 779192L;
                sort = GetSuggestedEditsIdsSortEnum.APPROVAL;
                todate = 925164L;
            }};            

            GetSuggestedEditsIdsResponse res = sdk.sdk.getSuggestedEditsIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsOrderEnum;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.operations.GetTagsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsRequest req = new GetTagsRequest("aperiam") {{
                callback = "distinctio";
                filter = "quod";
                fromdate = 490819L;
                inname = "inventore";
                max = "nihil";
                min = "totam";
                order = GetTagsOrderEnum.ASC;
                page = 306810L;
                pagesize = 488410L;
                sort = GetTagsSortEnum.ACTIVITY;
                todate = 414567L;
            }};            

            GetTagsResponse res = sdk.sdk.getTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsModeratorOnlyOrderEnum;
import org.openapis.openapi.models.operations.GetTagsModeratorOnlyRequest;
import org.openapis.openapi.models.operations.GetTagsModeratorOnlyResponse;
import org.openapis.openapi.models.operations.GetTagsModeratorOnlySortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsModeratorOnlyRequest req = new GetTagsModeratorOnlyRequest("sapiente") {{
                callback = "dolores";
                filter = "deserunt";
                fromdate = 475289L;
                inname = "accusantium";
                max = "porro";
                min = "eum";
                order = GetTagsModeratorOnlyOrderEnum.ASC;
                page = 510017L;
                pagesize = 159867L;
                sort = GetTagsModeratorOnlySortEnum.ACTIVITY;
                todate = 143829L;
            }};            

            GetTagsModeratorOnlyResponse res = sdk.sdk.getTagsModeratorOnly(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequiredOrderEnum;
import org.openapis.openapi.models.operations.GetTagsRequiredRequest;
import org.openapis.openapi.models.operations.GetTagsRequiredResponse;
import org.openapis.openapi.models.operations.GetTagsRequiredSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsRequiredRequest req = new GetTagsRequiredRequest("fuga") {{
                callback = "mollitia";
                filter = "incidunt";
                fromdate = 539224L;
                inname = "explicabo";
                max = "minima";
                min = "nisi";
                order = GetTagsRequiredOrderEnum.DESC;
                page = 956406L;
                pagesize = 159870L;
                sort = GetTagsRequiredSortEnum.POPULAR;
                todate = 129412L;
            }};            

            GetTagsRequiredResponse res = sdk.sdk.getTagsRequired(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsSynonymsOrderEnum;
import org.openapis.openapi.models.operations.GetTagsSynonymsRequest;
import org.openapis.openapi.models.operations.GetTagsSynonymsResponse;
import org.openapis.openapi.models.operations.GetTagsSynonymsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsSynonymsRequest req = new GetTagsSynonymsRequest("saepe") {{
                callback = "occaecati";
                filter = "atque";
                fromdate = 92260L;
                max = "esse";
                min = "eveniet";
                order = GetTagsSynonymsOrderEnum.ASC;
                page = 82971L;
                pagesize = 458604L;
                sort = GetTagsSynonymsSortEnum.ACTIVITY;
                todate = 724168L;
            }};            

            GetTagsSynonymsResponse res = sdk.sdk.getTagsSynonyms(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagsFaq

Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagsFaqRequest;
import org.openapis.openapi.models.operations.GetTagsTagsFaqResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagsFaqRequest req = new GetTagsTagsFaqRequest("vero", "aliquid") {{
                callback = "quasi";
                filter = "saepe";
                page = 426306L;
                pagesize = 690025L;
            }};            

            GetTagsTagsFaqResponse res = sdk.sdk.getTagsTagsFaq(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagsInfoOrderEnum;
import org.openapis.openapi.models.operations.GetTagsTagsInfoRequest;
import org.openapis.openapi.models.operations.GetTagsTagsInfoResponse;
import org.openapis.openapi.models.operations.GetTagsTagsInfoSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagsInfoRequest req = new GetTagsTagsInfoRequest("molestiae", "rerum") {{
                callback = "occaecati";
                filter = "minima";
                fromdate = 716244L;
                max = "eligendi";
                min = "sit";
                order = GetTagsTagsInfoOrderEnum.ASC;
                page = 731398L;
                pagesize = 240020L;
                sort = GetTagsTagsInfoSortEnum.NAME;
                todate = 160538L;
            }};            

            GetTagsTagsInfoResponse res = sdk.sdk.getTagsTagsInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagsRelated

Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagsRelatedRequest;
import org.openapis.openapi.models.operations.GetTagsTagsRelatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagsRelatedRequest req = new GetTagsTagsRelatedRequest("consequatur", "minus") {{
                callback = "quaerat";
                filter = "sapiente";
                page = 232865L;
                pagesize = 458139L;
            }};            

            GetTagsTagsRelatedResponse res = sdk.sdk.getTagsTagsRelated(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagsSynonymsOrderEnum;
import org.openapis.openapi.models.operations.GetTagsTagsSynonymsRequest;
import org.openapis.openapi.models.operations.GetTagsTagsSynonymsResponse;
import org.openapis.openapi.models.operations.GetTagsTagsSynonymsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagsSynonymsRequest req = new GetTagsTagsSynonymsRequest("blanditiis", "provident") {{
                callback = "a";
                filter = "nulla";
                fromdate = 557811L;
                max = "esse";
                min = "quasi";
                order = GetTagsTagsSynonymsOrderEnum.ASC;
                page = 621679L;
                pagesize = 575751L;
                sort = GetTagsTagsSynonymsSortEnum.ACTIVITY;
                todate = 820767L;
            }};            

            GetTagsTagsSynonymsResponse res = sdk.sdk.getTagsTagsSynonyms(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagsWikis

Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagsWikisRequest;
import org.openapis.openapi.models.operations.GetTagsTagsWikisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagsWikisRequest req = new GetTagsTagsWikisRequest("quia", "eveniet") {{
                callback = "asperiores";
                filter = "facere";
                page = 85001L;
                pagesize = 159414L;
            }};            

            GetTagsTagsWikisResponse res = sdk.sdk.getTagsTagsWikis(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagTopAnswerersPeriod

Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagTopAnswerersPeriodPeriodEnum;
import org.openapis.openapi.models.operations.GetTagsTagTopAnswerersPeriodRequest;
import org.openapis.openapi.models.operations.GetTagsTagTopAnswerersPeriodResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagTopAnswerersPeriodRequest req = new GetTagsTagTopAnswerersPeriodRequest(GetTagsTagTopAnswerersPeriodPeriodEnum.ALL_TIME, "similique", "culpa") {{
                callback = "aliquid";
                filter = "tenetur";
                page = 62713L;
                pagesize = 936747L;
            }};            

            GetTagsTagTopAnswerersPeriodResponse res = sdk.sdk.getTagsTagTopAnswerersPeriod(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagTopAskersPeriod

Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagTopAskersPeriodPeriodEnum;
import org.openapis.openapi.models.operations.GetTagsTagTopAskersPeriodRequest;
import org.openapis.openapi.models.operations.GetTagsTagTopAskersPeriodResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsTagTopAskersPeriodRequest req = new GetTagsTagTopAskersPeriodRequest(GetTagsTagTopAskersPeriodPeriodEnum.ALL_TIME, "in", "eius") {{
                callback = "libero";
                filter = "illum";
                page = 742238L;
                pagesize = 33304L;
            }};            

            GetTagsTagTopAskersPeriodResponse res = sdk.sdk.getTagsTagTopAskersPeriod(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersOrderEnum;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.operations.GetUsersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest("aliquam") {{
                callback = "sapiente";
                filter = "dicta";
                fromdate = 355369L;
                inname = "reprehenderit";
                max = "ullam";
                min = "nisi";
                order = GetUsersOrderEnum.DESC;
                page = 531849L;
                pagesize = 185232L;
                sort = GetUsersSortEnum.MODIFIED;
                todate = 401259L;
            }};            

            GetUsersResponse res = sdk.sdk.getUsers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersModeratorsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersModeratorsRequest;
import org.openapis.openapi.models.operations.GetUsersModeratorsResponse;
import org.openapis.openapi.models.operations.GetUsersModeratorsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersModeratorsRequest req = new GetUsersModeratorsRequest("deleniti") {{
                callback = "itaque";
                filter = "dolorum";
                fromdate = 99615L;
                max = "omnis";
                min = "tenetur";
                order = GetUsersModeratorsOrderEnum.DESC;
                page = 869489L;
                pagesize = 92027L;
                sort = GetUsersModeratorsSortEnum.CREATION;
                todate = 55965L;
            }};            

            GetUsersModeratorsResponse res = sdk.sdk.getUsersModerators(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersModeratorsElectedOrderEnum;
import org.openapis.openapi.models.operations.GetUsersModeratorsElectedRequest;
import org.openapis.openapi.models.operations.GetUsersModeratorsElectedResponse;
import org.openapis.openapi.models.operations.GetUsersModeratorsElectedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersModeratorsElectedRequest req = new GetUsersModeratorsElectedRequest("minima") {{
                callback = "veritatis";
                filter = "consectetur";
                fromdate = 237173L;
                max = "iste";
                min = "temporibus";
                order = GetUsersModeratorsElectedOrderEnum.DESC;
                page = 522371L;
                pagesize = 15606L;
                sort = GetUsersModeratorsElectedSortEnum.NAME;
                todate = 428796L;
            }};            

            GetUsersModeratorsElectedResponse res = sdk.sdk.getUsersModeratorsElected(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsRequest;
import org.openapis.openapi.models.operations.GetUsersIdsResponse;
import org.openapis.openapi.models.operations.GetUsersIdsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsRequest req = new GetUsersIdsRequest("mollitia", "ab") {{
                callback = "corrupti";
                filter = "non";
                fromdate = 32465L;
                max = "dolor";
                min = "occaecati";
                order = GetUsersIdsOrderEnum.DESC;
                page = 771089L;
                pagesize = 131055L;
                sort = GetUsersIdsSortEnum.CREATION;
                todate = 12036L;
            }};            

            GetUsersIdsResponse res = sdk.sdk.getUsersIds(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsAnswersRequest;
import org.openapis.openapi.models.operations.GetUsersIdsAnswersResponse;
import org.openapis.openapi.models.operations.GetUsersIdsAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsAnswersRequest req = new GetUsersIdsAnswersRequest("dignissimos", "dicta") {{
                callback = "maiores";
                filter = "natus";
                fromdate = 244651L;
                max = "voluptatibus";
                min = "voluptas";
                order = GetUsersIdsAnswersOrderEnum.ASC;
                page = 45659L;
                pagesize = 409054L;
                sort = GetUsersIdsAnswersSortEnum.ACTIVITY;
                todate = 162954L;
            }};            

            GetUsersIdsAnswersResponse res = sdk.sdk.getUsersIdsAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdsAssociated

Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsAssociatedRequest;
import org.openapis.openapi.models.operations.GetUsersIdsAssociatedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsAssociatedRequest req = new GetUsersIdsAssociatedRequest("repellendus") {{
                callback = "officia";
                filter = "maxime";
                page = 490305L;
                pagesize = 640024L;
            }};            

            GetUsersIdsAssociatedResponse res = sdk.sdk.getUsersIdsAssociated(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsBadgesOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsBadgesRequest;
import org.openapis.openapi.models.operations.GetUsersIdsBadgesResponse;
import org.openapis.openapi.models.operations.GetUsersIdsBadgesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsBadgesRequest req = new GetUsersIdsBadgesRequest("asperiores", "nemo") {{
                callback = "quae";
                filter = "quaerat";
                fromdate = 783235L;
                max = "quod";
                min = "labore";
                order = GetUsersIdsBadgesOrderEnum.DESC;
                page = 241418L;
                pagesize = 683573L;
                sort = GetUsersIdsBadgesSortEnum.TYPE;
                todate = 380729L;
            }};            

            GetUsersIdsBadgesResponse res = sdk.sdk.getUsersIdsBadges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsRequest;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsResponse;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsCommentsRequest req = new GetUsersIdsCommentsRequest("velit", "culpa") {{
                callback = "est";
                filter = "recusandae";
                fromdate = 517309L;
                max = "fugiat";
                min = "vel";
                order = GetUsersIdsCommentsOrderEnum.DESC;
                page = 554688L;
                pagesize = 427834L;
                sort = GetUsersIdsCommentsSortEnum.CREATION;
                todate = 822560L;
            }};            

            GetUsersIdsCommentsResponse res = sdk.sdk.getUsersIdsComments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsToidOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsToidRequest;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsToidResponse;
import org.openapis.openapi.models.operations.GetUsersIdsCommentsToidSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsCommentsToidRequest req = new GetUsersIdsCommentsToidRequest("facilis", "cum", 414857L) {{
                callback = "in";
                filter = "corporis";
                fromdate = 968904L;
                max = "assumenda";
                min = "nemo";
                order = GetUsersIdsCommentsToidOrderEnum.ASC;
                page = 397533L;
                pagesize = 46007L;
                sort = GetUsersIdsCommentsToidSortEnum.VOTES;
                todate = 232627L;
            }};            

            GetUsersIdsCommentsToidResponse res = sdk.sdk.getUsersIdsCommentsToid(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsFavoritesOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsFavoritesRequest;
import org.openapis.openapi.models.operations.GetUsersIdsFavoritesResponse;
import org.openapis.openapi.models.operations.GetUsersIdsFavoritesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsFavoritesRequest req = new GetUsersIdsFavoritesRequest("in", "exercitationem") {{
                callback = "earum";
                filter = "facere";
                fromdate = 257233L;
                max = "doloribus";
                min = "suscipit";
                order = GetUsersIdsFavoritesOrderEnum.ASC;
                page = 697142L;
                pagesize = 904949L;
                sort = GetUsersIdsFavoritesSortEnum.ADDED;
                todate = 296556L;
            }};            

            GetUsersIdsFavoritesResponse res = sdk.sdk.getUsersIdsFavorites(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsMentionedOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsMentionedRequest;
import org.openapis.openapi.models.operations.GetUsersIdsMentionedResponse;
import org.openapis.openapi.models.operations.GetUsersIdsMentionedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsMentionedRequest req = new GetUsersIdsMentionedRequest("sunt", "asperiores") {{
                callback = "adipisci";
                filter = "non";
                fromdate = 228263L;
                max = "beatae";
                min = "dignissimos";
                order = GetUsersIdsMentionedOrderEnum.ASC;
                page = 891523L;
                pagesize = 233420L;
                sort = GetUsersIdsMentionedSortEnum.CREATION;
                todate = 689768L;
            }};            

            GetUsersIdsMentionedResponse res = sdk.sdk.getUsersIdsMentioned(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsMergesRequest;
import org.openapis.openapi.models.operations.GetUsersIdsMergesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsMergesRequest req = new GetUsersIdsMergesRequest("laboriosam") {{
                callback = "ipsa";
                filter = "voluptates";
                page = 730709L;
                pagesize = 113816L;
            }};            

            GetUsersIdsMergesResponse res = sdk.sdk.getUsersIdsMerges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsResponse;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsQuestionsRequest req = new GetUsersIdsQuestionsRequest("accusamus", "similique") {{
                callback = "tempora";
                filter = "aspernatur";
                fromdate = 379057L;
                max = "voluptas";
                min = "voluptas";
                order = GetUsersIdsQuestionsOrderEnum.DESC;
                page = 748789L;
                pagesize = 680116L;
                sort = GetUsersIdsQuestionsSortEnum.ACTIVITY;
                todate = 795535L;
            }};            

            GetUsersIdsQuestionsResponse res = sdk.sdk.getUsersIdsQuestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsFeaturedOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsFeaturedRequest;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsFeaturedResponse;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsFeaturedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsQuestionsFeaturedRequest req = new GetUsersIdsQuestionsFeaturedRequest("dolores", "blanditiis") {{
                callback = "in";
                filter = "dolore";
                fromdate = 304468L;
                max = "officiis";
                min = "temporibus";
                order = GetUsersIdsQuestionsFeaturedOrderEnum.DESC;
                page = 237742L;
                pagesize = 738391L;
                sort = GetUsersIdsQuestionsFeaturedSortEnum.CREATION;
                todate = 555361L;
            }};            

            GetUsersIdsQuestionsFeaturedResponse res = sdk.sdk.getUsersIdsQuestionsFeatured(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsNoAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsNoAnswersRequest;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsNoAnswersResponse;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsNoAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsQuestionsNoAnswersRequest req = new GetUsersIdsQuestionsNoAnswersRequest("hic", "nesciunt") {{
                callback = "culpa";
                filter = "corrupti";
                fromdate = 867290L;
                max = "totam";
                min = "hic";
                order = GetUsersIdsQuestionsNoAnswersOrderEnum.DESC;
                page = 750765L;
                pagesize = 24619L;
                sort = GetUsersIdsQuestionsNoAnswersSortEnum.VOTES;
                todate = 148829L;
            }};            

            GetUsersIdsQuestionsNoAnswersResponse res = sdk.sdk.getUsersIdsQuestionsNoAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnacceptedOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnacceptedRequest;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnacceptedResponse;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnacceptedSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsQuestionsUnacceptedRequest req = new GetUsersIdsQuestionsUnacceptedRequest("reiciendis", "explicabo") {{
                callback = "asperiores";
                filter = "facilis";
                fromdate = 451822L;
                max = "expedita";
                min = "ab";
                order = GetUsersIdsQuestionsUnacceptedOrderEnum.ASC;
                page = 292794L;
                pagesize = 671907L;
                sort = GetUsersIdsQuestionsUnacceptedSortEnum.ACTIVITY;
                todate = 447516L;
            }};            

            GetUsersIdsQuestionsUnacceptedResponse res = sdk.sdk.getUsersIdsQuestionsUnaccepted(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnansweredOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnansweredRequest;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnansweredResponse;
import org.openapis.openapi.models.operations.GetUsersIdsQuestionsUnansweredSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsQuestionsUnansweredRequest req = new GetUsersIdsQuestionsUnansweredRequest("commodi", "quidem") {{
                callback = "explicabo";
                filter = "voluptas";
                fromdate = 604118L;
                max = "architecto";
                min = "suscipit";
                order = GetUsersIdsQuestionsUnansweredOrderEnum.ASC;
                page = 895386L;
                pagesize = 72434L;
                sort = GetUsersIdsQuestionsUnansweredSortEnum.VOTES;
                todate = 19300L;
            }};            

            GetUsersIdsQuestionsUnansweredResponse res = sdk.sdk.getUsersIdsQuestionsUnanswered(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdsReputation

Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsReputationRequest;
import org.openapis.openapi.models.operations.GetUsersIdsReputationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsReputationRequest req = new GetUsersIdsReputationRequest("corrupti", "maiores") {{
                callback = "incidunt";
                filter = "sed";
                fromdate = 592231L;
                page = 258702L;
                pagesize = 896762L;
                todate = 215529L;
            }};            

            GetUsersIdsReputationResponse res = sdk.sdk.getUsersIdsReputation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdsReputationHistory

Returns users' public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsReputationHistoryRequest;
import org.openapis.openapi.models.operations.GetUsersIdsReputationHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsReputationHistoryRequest req = new GetUsersIdsReputationHistoryRequest("ea", "occaecati") {{
                callback = "quos";
                filter = "voluptatibus";
                page = 271653L;
                pagesize = 273009L;
            }};            

            GetUsersIdsReputationHistoryResponse res = sdk.sdk.getUsersIdsReputationHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsSuggestedEditsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsSuggestedEditsRequest;
import org.openapis.openapi.models.operations.GetUsersIdsSuggestedEditsResponse;
import org.openapis.openapi.models.operations.GetUsersIdsSuggestedEditsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsSuggestedEditsRequest req = new GetUsersIdsSuggestedEditsRequest("voluptate", "reiciendis") {{
                callback = "ex";
                filter = "sit";
                fromdate = 248413L;
                max = "officiis";
                min = "praesentium";
                order = GetUsersIdsSuggestedEditsOrderEnum.ASC;
                page = 310381L;
                pagesize = 277773L;
                sort = GetUsersIdsSuggestedEditsSortEnum.APPROVAL;
                todate = 894864L;
            }};            

            GetUsersIdsSuggestedEditsResponse res = sdk.sdk.getUsersIdsSuggestedEdits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsTagsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdsTagsRequest;
import org.openapis.openapi.models.operations.GetUsersIdsTagsResponse;
import org.openapis.openapi.models.operations.GetUsersIdsTagsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsTagsRequest req = new GetUsersIdsTagsRequest("rem", "sit") {{
                callback = "nobis";
                filter = "error";
                fromdate = 333507L;
                max = "minima";
                min = "recusandae";
                order = GetUsersIdsTagsOrderEnum.ASC;
                page = 862319L;
                pagesize = 168576L;
                sort = GetUsersIdsTagsSortEnum.POPULAR;
                todate = 901483L;
            }};            

            GetUsersIdsTagsResponse res = sdk.sdk.getUsersIdsTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdsTimeline

Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdsTimelineRequest;
import org.openapis.openapi.models.operations.GetUsersIdsTimelineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdsTimelineRequest req = new GetUsersIdsTimelineRequest("numquam", "veniam") {{
                callback = "in";
                filter = "officiis";
                fromdate = 104627L;
                page = 512452L;
                pagesize = 348476L;
                todate = 510629L;
            }};            

            GetUsersIdsTimelineResponse res = sdk.sdk.getUsersIdsTimeline(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdInboxRequest;
import org.openapis.openapi.models.operations.GetUsersIdInboxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdInboxRequest req = new GetUsersIdInboxRequest(740098L, "laboriosam") {{
                callback = "dolorum";
                filter = "voluptatum";
                page = 622385L;
                pagesize = 944708L;
            }};            

            GetUsersIdInboxResponse res = sdk.sdk.getUsersIdInbox(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdInboxUnreadRequest;
import org.openapis.openapi.models.operations.GetUsersIdInboxUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdInboxUnreadRequest req = new GetUsersIdInboxUnreadRequest(710529L, "debitis") {{
                callback = "neque";
                filter = "dolorum";
                page = 341698L;
                pagesize = 639028L;
                since = 676243L;
            }};            

            GetUsersIdInboxUnreadResponse res = sdk.sdk.getUsersIdInboxUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdNotificationsRequest;
import org.openapis.openapi.models.operations.GetUsersIdNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdNotificationsRequest req = new GetUsersIdNotificationsRequest(548361L, "accusamus") {{
                callback = "tempora";
                filter = "atque";
                page = 148268L;
                pagesize = 282699L;
            }};            

            GetUsersIdNotificationsResponse res = sdk.sdk.getUsersIdNotifications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdNotificationsUnreadRequest;
import org.openapis.openapi.models.operations.GetUsersIdNotificationsUnreadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdNotificationsUnreadRequest req = new GetUsersIdNotificationsUnreadRequest(856303L, "voluptatem") {{
                callback = "culpa";
                filter = "expedita";
                page = 299643L;
                pagesize = 7884L;
            }};            

            GetUsersIdNotificationsUnreadResponse res = sdk.sdk.getUsersIdNotificationsUnread(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdPrivileges

Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdPrivilegesRequest;
import org.openapis.openapi.models.operations.GetUsersIdPrivilegesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdPrivilegesRequest req = new GetUsersIdPrivilegesRequest(460220L, "ipsam") {{
                callback = "sit";
                filter = "voluptatum";
                page = 558065L;
                pagesize = 922112L;
            }};            

            GetUsersIdPrivilegesResponse res = sdk.sdk.getUsersIdPrivileges(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdReputationHistoryFull

Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdReputationHistoryFullRequest;
import org.openapis.openapi.models.operations.GetUsersIdReputationHistoryFullResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdReputationHistoryFullRequest req = new GetUsersIdReputationHistoryFullRequest(361151L, "et") {{
                callback = "blanditiis";
                filter = "ex";
                page = 153627L;
                pagesize = 24313L;
            }};            

            GetUsersIdReputationHistoryFullResponse res = sdk.sdk.getUsersIdReputationHistoryFull(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopAnswersOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopAnswersRequest;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopAnswersResponse;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopAnswersSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdTagsTagsTopAnswersRequest req = new GetUsersIdTagsTagsTopAnswersRequest(425508L, "nostrum", "saepe") {{
                callback = "error";
                filter = "consequatur";
                fromdate = 279068L;
                max = "reiciendis";
                min = "dolorem";
                order = GetUsersIdTagsTagsTopAnswersOrderEnum.ASC;
                page = 115703L;
                pagesize = 99416L;
                sort = GetUsersIdTagsTagsTopAnswersSortEnum.CREATION;
                todate = 289776L;
            }};            

            GetUsersIdTagsTagsTopAnswersResponse res = sdk.sdk.getUsersIdTagsTagsTopAnswers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopQuestionsOrderEnum;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopQuestionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopQuestionsResponse;
import org.openapis.openapi.models.operations.GetUsersIdTagsTagsTopQuestionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdTagsTagsTopQuestionsRequest req = new GetUsersIdTagsTagsTopQuestionsRequest(695270L, "atque", "laborum") {{
                callback = "nam";
                filter = "tenetur";
                fromdate = 388867L;
                max = "alias";
                min = "amet";
                order = GetUsersIdTagsTagsTopQuestionsOrderEnum.ASC;
                page = 454860L;
                pagesize = 600392L;
                sort = GetUsersIdTagsTagsTopQuestionsSortEnum.VOTES;
                todate = 588740L;
            }};            

            GetUsersIdTagsTagsTopQuestionsResponse res = sdk.sdk.getUsersIdTagsTagsTopQuestions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdTopAnswerTags

Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTopAnswerTagsRequest;
import org.openapis.openapi.models.operations.GetUsersIdTopAnswerTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdTopAnswerTagsRequest req = new GetUsersIdTopAnswerTagsRequest(833819L, "delectus") {{
                callback = "voluptates";
                filter = "perferendis";
                page = 667285L;
                pagesize = 696483L;
            }};            

            GetUsersIdTopAnswerTagsResponse res = sdk.sdk.getUsersIdTopAnswerTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdTopQuestionTags

Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTopQuestionTagsRequest;
import org.openapis.openapi.models.operations.GetUsersIdTopQuestionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdTopQuestionTagsRequest req = new GetUsersIdTopQuestionTagsRequest(440666L, "facere") {{
                callback = "fuga";
                filter = "praesentium";
                page = 648598L;
                pagesize = 333965L;
            }};            

            GetUsersIdTopQuestionTagsResponse res = sdk.sdk.getUsersIdTopQuestionTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdWritePermissions

Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdWritePermissionsRequest;
import org.openapis.openapi.models.operations.GetUsersIdWritePermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdWritePermissionsRequest req = new GetUsersIdWritePermissionsRequest(29100L, "quisquam") {{
                callback = "repudiandae";
                filter = "quasi";
                page = 542457L;
                pagesize = 442036L;
            }};            

            GetUsersIdWritePermissionsResponse res = sdk.sdk.getUsersIdWritePermissions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommentsIdDelete

Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommentsIdDeleteRequest;
import org.openapis.openapi.models.operations.PostCommentsIdDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCommentsIdDeleteRequest req = new PostCommentsIdDeleteRequest(991142L, "totam") {{
                callback = "suscipit";
                filter = "quidem";
                preview = false;
            }};            

            PostCommentsIdDeleteResponse res = sdk.sdk.postCommentsIdDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommentsIdEdit

Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommentsIdEditRequest;
import org.openapis.openapi.models.operations.PostCommentsIdEditResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCommentsIdEditRequest req = new PostCommentsIdEditRequest(806670L, "et") {{
                body = "esse";
                callback = "amet";
                filter = "assumenda";
                preview = false;
            }};            

            PostCommentsIdEditResponse res = sdk.sdk.postCommentsIdEdit(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPostsIdCommentsAdd

Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPostsIdCommentsAddRequest;
import org.openapis.openapi.models.operations.PostPostsIdCommentsAddResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPostsIdCommentsAddRequest req = new PostPostsIdCommentsAddRequest(410301L, "atque") {{
                body = "error";
                callback = "officiis";
                filter = "officiis";
                preview = false;
            }};            

            PostPostsIdCommentsAddResponse res = sdk.sdk.postPostsIdCommentsAdd(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
