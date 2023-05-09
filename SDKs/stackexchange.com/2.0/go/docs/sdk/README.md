# SDK

## Overview

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.


<https://api.stackexchange.com/>
### Available Operations

* [GetAccessTokensAccessTokens](#getaccesstokensaccesstokens) - Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [GetAccessTokensAccessTokensInvalidate](#getaccesstokensaccesstokensinvalidate) - Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [GetAnswers](#getanswers) - Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [GetAnswersIds](#getanswersids) - Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [GetAnswersIdsComments](#getanswersidscomments) - Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetAppsAccessTokensDeAuthenticate](#getappsaccesstokensdeauthenticate) - Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.

* [GetBadges](#getbadges) - Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [GetBadgesName](#getbadgesname) - Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [GetBadgesRecipients](#getbadgesrecipients) - Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.

* [GetBadgesTags](#getbadgestags) - Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.

* [GetBadgesIds](#getbadgesids) - Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.

* [GetBadgesIdsRecipients](#getbadgesidsrecipients) - Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.

* [GetComments](#getcomments) - Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetCommentsIds](#getcommentsids) - Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetErrors](#geterrors) - Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.

* [GetErrorsID](#geterrorsid) - This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.

* [GetEvents](#getevents) - Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user

  

 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.

* [GetFiltersCreate](#getfilterscreate) - Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.

* [GetFiltersFilters](#getfiltersfilters) - Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.

* [GetInbox](#getinbox) - Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [GetInboxUnread](#getinboxunread) - Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [GetInfo](#getinfo) - Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.

* [GetMe](#getme) - Returns the user associated with the passed access_token.
 
This method returns a user.

* [GetMeAnswers](#getmeanswers) - Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.

* [GetMeAssociated](#getmeassociated) - Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.

* [GetMeBadges](#getmebadges) - Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.

* [GetMeComments](#getmecomments) - Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.

* [GetMeCommentsToID](#getmecommentstoid) - Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.

* [GetMeFavorites](#getmefavorites) - Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.

* [GetMeInbox](#getmeinbox) - Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [GetMeInboxUnread](#getmeinboxunread) - Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.

* [GetMeMentioned](#getmementioned) - Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.

* [GetMeMerges](#getmemerges) - Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.

* [GetMeNotifications](#getmenotifications) - Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetMeNotificationsUnread](#getmenotificationsunread) - Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetMePrivileges](#getmeprivileges) - Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.

* [GetMeQuestions](#getmequestions) - Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.

* [GetMeQuestionsFeatured](#getmequestionsfeatured) - Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.

* [GetMeQuestionsNoAnswers](#getmequestionsnoanswers) - Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.

* [GetMeQuestionsUnaccepted](#getmequestionsunaccepted) - Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.

* [GetMeQuestionsUnanswered](#getmequestionsunanswered) - Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.

* [GetMeReputation](#getmereputation) - Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.

* [GetMeReputationHistory](#getmereputationhistory) - Returns user's public reputation history.
 
This method returns a list of reputation_history.

* [GetMeReputationHistoryFull](#getmereputationhistoryfull) - Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.

* [GetMeSuggestedEdits](#getmesuggestededits) - Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.

* [GetMeTags](#getmetags) - Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.

* [GetMeTagsTagsTopAnswers](#getmetagstagstopanswers) - Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.

* [GetMeTagsTagsTopQuestions](#getmetagstagstopquestions) - Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.

* [GetMeTimeline](#getmetimeline) - Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.

* [GetMeTopAnswerTags](#getmetopanswertags) - Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.

* [GetMeTopQuestionTags](#getmetopquestiontags) - Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.

* [GetMeWritePermissions](#getmewritepermissions) - Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.

* [GetNotifications](#getnotifications) - Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetNotificationsUnread](#getnotificationsunread) - Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetPosts](#getposts) - Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.

* [GetPostsIds](#getpostsids) - Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.

* [GetPostsIdsComments](#getpostsidscomments) - Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetPostsIdsRevisions](#getpostsidsrevisions) - Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.

* [GetPostsIdsSuggestedEdits](#getpostsidssuggestededits) - Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.

 
This method returns a list of suggested-edits.

* [GetPrivileges](#getprivileges) - Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.

* [GetQuestions](#getquestions) - Gets all the questions on the site.
 
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

* [GetQuestionsFeatured](#getquestionsfeatured) - Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetQuestionsNoAnswers](#getquestionsnoanswers) - Returns questions which have received no answers.
 
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

* [GetQuestionsUnanswered](#getquestionsunanswered) - Returns questions the site considers to be unanswered.
 
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

* [GetQuestionsIds](#getquestionsids) - Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetQuestionsIdsAnswers](#getquestionsidsanswers) - Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [GetQuestionsIdsComments](#getquestionsidscomments) - Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetQuestionsIdsLinked](#getquestionsidslinked) - Gets questions which link to those questions identified in {ids}.
 
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

* [GetQuestionsIdsRelated](#getquestionsidsrelated) - Returns questions that the site considers related to those identified in {ids}.
 
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

* [GetQuestionsIdsTimeline](#getquestionsidstimeline) - Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.

* [GetRevisionsIds](#getrevisionsids) - Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.

* [GetSearch](#getsearch) - Searches a site for any questions which fit the given criteria.
 
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

* [GetSearchAdvanced](#getsearchadvanced) - Searches a site for any questions which fit the given criteria.
 
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

* [GetSimilar](#getsimilar) - Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
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

* [GetSites](#getsites) - Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.

* [GetSuggestedEdits](#getsuggestededits) - Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [GetSuggestedEditsIds](#getsuggestededitsids) - Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.

* [GetTags](#gettags) - Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [GetTagsModeratorOnly](#gettagsmoderatoronly) - Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [GetTagsRequired](#gettagsrequired) - Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [GetTagsSynonyms](#gettagssynonyms) - Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag_synonyms.

* [GetTagsTagsFaq](#gettagstagsfaq) - Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.

* [GetTagsTagsInfo](#gettagstagsinfo) - Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

* [GetTagsTagsRelated](#gettagstagsrelated) - Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.

* [GetTagsTagsSynonyms](#gettagstagssynonyms) - Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag synonyms.

* [GetTagsTagsWikis](#gettagstagswikis) - Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.

* [GetTagsTagTopAnswerersPeriod](#gettagstagtopanswerersperiod) - Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.

* [GetTagsTagTopAskersPeriod](#gettagstagtopaskersperiod) - Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.

* [GetUsers](#getusers) - Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".

* [GetUsersModerators](#getusersmoderators) - Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.

* [GetUsersModeratorsElected](#getusersmoderatorselected) - Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.

* [GetUsersIds](#getusersids) - Gets the users identified in ids in {ids}.
 
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

* [GetUsersIdsAnswers](#getusersidsanswers) - Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [GetUsersIdsAssociated](#getusersidsassociated) - Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.

* [GetUsersIdsBadges](#getusersidsbadges) - Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.

* [GetUsersIdsComments](#getusersidscomments) - Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetUsersIdsCommentsToid](#getusersidscommentstoid) - Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetUsersIdsFavorites](#getusersidsfavorites) - Get the questions that users in {ids} have favorited.
 
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

* [GetUsersIdsMentioned](#getusersidsmentioned) - Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.

* [GetUsersIdsMerges](#getusersidsmerges) - Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.

* [GetUsersIdsQuestions](#getusersidsquestions) - Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetUsersIdsQuestionsFeatured](#getusersidsquestionsfeatured) - Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetUsersIdsQuestionsNoAnswers](#getusersidsquestionsnoanswers) - Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetUsersIdsQuestionsUnaccepted](#getusersidsquestionsunaccepted) - Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetUsersIdsQuestionsUnanswered](#getusersidsquestionsunanswered) - Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
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

* [GetUsersIdsReputation](#getusersidsreputation) - Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.

* [GetUsersIdsReputationHistory](#getusersidsreputationhistory) - Returns users' public reputation history.
 
This method returns a list of reputation_history.

* [GetUsersIdsSuggestedEdits](#getusersidssuggestededits) - Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.

* [GetUsersIdsTags](#getusersidstags) - Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tags.

* [GetUsersIdsTimeline](#getusersidstimeline) - Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.

* [GetUsersIDInbox](#getusersidinbox) - Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.

* [GetUsersIDInboxUnread](#getusersidinboxunread) - Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.

* [GetUsersIDNotifications](#getusersidnotifications) - Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetUsersIDNotificationsUnread](#getusersidnotificationsunread) - Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.

* [GetUsersIDPrivileges](#getusersidprivileges) - Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.

* [GetUsersIDReputationHistoryFull](#getusersidreputationhistoryfull) - Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.

* [GetUsersIDTagsTagsTopAnswers](#getusersidtagstagstopanswers) - Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.

* [GetUsersIDTagsTagsTopQuestions](#getusersidtagstagstopquestions) - Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.

* [GetUsersIDTopAnswerTags](#getusersidtopanswertags) - Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.

* [GetUsersIDTopQuestionTags](#getusersidtopquestiontags) - Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.

* [GetUsersIDWritePermissions](#getusersidwritepermissions) - Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.

* [PostCommentsIDDelete](#postcommentsiddelete) - Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.

* [PostCommentsIDEdit](#postcommentsidedit) - Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.

* [PostPostsIDCommentsAdd](#postpostsidcommentsadd) - Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


## GetAccessTokensAccessTokens

Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAccessTokensAccessTokens(ctx, operations.GetAccessTokensAccessTokensRequest{
        AccessTokens: "nulla",
        Callback: sdk.String("corrupti"),
        Filter: sdk.String("illum"),
        Page: sdk.Int64(423655),
        Pagesize: sdk.Int64(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAccessTokensAccessTokensInvalidate

Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAccessTokensAccessTokensInvalidate(ctx, operations.GetAccessTokensAccessTokensInvalidateRequest{
        AccessTokens: "deserunt",
        Callback: sdk.String("suscipit"),
        Filter: sdk.String("iure"),
        Page: sdk.Int64(297534),
        Pagesize: sdk.Int64(891773),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAnswers

Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAnswers(ctx, operations.GetAnswersRequest{
        Callback: sdk.String("ipsa"),
        Filter: sdk.String("delectus"),
        Fromdate: sdk.Int64(272656),
        Max: sdk.String("suscipit"),
        Min: sdk.String("molestiae"),
        Order: operations.GetAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(812169),
        Pagesize: sdk.Int64(528895),
        Site: "iusto",
        Sort: operations.GetAnswersSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(392785),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAnswersIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAnswersIds(ctx, operations.GetAnswersIdsRequest{
        Callback: sdk.String("recusandae"),
        Filter: sdk.String("temporibus"),
        Fromdate: sdk.Int64(71036),
        Ids: "quis",
        Max: sdk.String("veritatis"),
        Min: sdk.String("deserunt"),
        Order: operations.GetAnswersIdsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(368241),
        Pagesize: sdk.Int64(832620),
        Site: "sapiente",
        Sort: operations.GetAnswersIdsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(140350),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAnswersIdsComments

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAnswersIdsComments(ctx, operations.GetAnswersIdsCommentsRequest{
        Callback: sdk.String("at"),
        Filter: sdk.String("at"),
        Fromdate: sdk.Int64(978619),
        Ids: "molestiae",
        Max: sdk.String("quod"),
        Min: sdk.String("quod"),
        Order: operations.GetAnswersIdsCommentsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(520478),
        Pagesize: sdk.Int64(780529),
        Site: "dolorum",
        Sort: operations.GetAnswersIdsCommentsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(720633),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetAppsAccessTokensDeAuthenticate

Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAppsAccessTokensDeAuthenticate(ctx, operations.GetAppsAccessTokensDeAuthenticateRequest{
        AccessTokens: "officia",
        Callback: sdk.String("occaecati"),
        Filter: sdk.String("fugit"),
        Page: sdk.Int64(537373),
        Pagesize: sdk.Int64(944669),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadges

Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadges(ctx, operations.GetBadgesRequest{
        Callback: sdk.String("optio"),
        Filter: sdk.String("totam"),
        Fromdate: sdk.Int64(105907),
        Inname: sdk.String("commodi"),
        Max: sdk.String("molestiae"),
        Min: sdk.String("modi"),
        Order: operations.GetBadgesOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(774234),
        Pagesize: sdk.Int64(736918),
        Site: "esse",
        Sort: operations.GetBadgesSortEnumRank.ToPointer(),
        Todate: sdk.Int64(568434),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadgesName

Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadgesName(ctx, operations.GetBadgesNameRequest{
        Callback: sdk.String("aspernatur"),
        Filter: sdk.String("perferendis"),
        Fromdate: sdk.Int64(324141),
        Inname: sdk.String("natus"),
        Max: sdk.String("sed"),
        Min: sdk.String("iste"),
        Order: operations.GetBadgesNameOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(616934),
        Pagesize: sdk.Int64(386489),
        Site: "hic",
        Sort: operations.GetBadgesNameSortEnumName.ToPointer(),
        Todate: sdk.Int64(681820),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadgesRecipients

Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadgesRecipients(ctx, operations.GetBadgesRecipientsRequest{
        Callback: sdk.String("in"),
        Filter: sdk.String("corporis"),
        Fromdate: sdk.Int64(613064),
        Page: sdk.Int64(437032),
        Pagesize: sdk.Int64(902349),
        Site: "quidem",
        Todate: sdk.Int64(99280),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadgesTags

Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadgesTags(ctx, operations.GetBadgesTagsRequest{
        Callback: sdk.String("ipsa"),
        Filter: sdk.String("reiciendis"),
        Fromdate: sdk.Int64(666767),
        Inname: sdk.String("mollitia"),
        Max: sdk.String("laborum"),
        Min: sdk.String("dolores"),
        Order: operations.GetBadgesTagsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(358152),
        Pagesize: sdk.Int64(128926),
        Site: "nobis",
        Sort: operations.GetBadgesTagsSortEnumRank.ToPointer(),
        Todate: sdk.Int64(607831),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadgesIds

Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadgesIds(ctx, operations.GetBadgesIdsRequest{
        Callback: sdk.String("nemo"),
        Filter: sdk.String("minima"),
        Fromdate: sdk.Int64(570197),
        Ids: "accusantium",
        Max: sdk.String("iure"),
        Min: sdk.String("culpa"),
        Order: operations.GetBadgesIdsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(958950),
        Pagesize: sdk.Int64(102044),
        Site: "mollitia",
        Sort: operations.GetBadgesIdsSortEnumRank.ToPointer(),
        Todate: sdk.Int64(635059),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetBadgesIdsRecipients

Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBadgesIdsRecipients(ctx, operations.GetBadgesIdsRecipientsRequest{
        Callback: sdk.String("consequuntur"),
        Filter: sdk.String("repellat"),
        Fromdate: sdk.Int64(653108),
        Ids: "occaecati",
        Page: sdk.Int64(253291),
        Pagesize: sdk.Int64(414369),
        Site: "quam",
        Todate: sdk.Int64(474697),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetComments

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetComments(ctx, operations.GetCommentsRequest{
        Callback: sdk.String("velit"),
        Filter: sdk.String("error"),
        Fromdate: sdk.Int64(158969),
        Max: sdk.String("quis"),
        Min: sdk.String("vitae"),
        Order: operations.GetCommentsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(656330),
        Pagesize: sdk.Int64(317202),
        Site: "odit",
        Sort: operations.GetCommentsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(196582),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCommentsIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetCommentsIds(ctx, operations.GetCommentsIdsRequest{
        Callback: sdk.String("tenetur"),
        Filter: sdk.String("ipsam"),
        Fromdate: sdk.Int64(662527),
        Ids: "possimus",
        Max: sdk.String("aut"),
        Min: sdk.String("quasi"),
        Order: operations.GetCommentsIdsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(837945),
        Pagesize: sdk.Int64(673660),
        Site: "quasi",
        Sort: operations.GetCommentsIdsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(976460),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetErrors

Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetErrors(ctx, operations.GetErrorsRequest{
        Callback: sdk.String("vero"),
        Filter: sdk.String("nihil"),
        Page: sdk.Int64(509624),
        Pagesize: sdk.Int64(976762),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetErrorsID

This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetErrorsID(ctx, operations.GetErrorsIDRequest{
        ID: 55714,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetEvents

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetEvents(ctx, operations.GetEventsRequest{
        Callback: sdk.String("omnis"),
        Filter: sdk.String("voluptate"),
        Page: sdk.Int64(739264),
        Pagesize: sdk.Int64(19987),
        Since: sdk.Int64(39187),
        Site: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFiltersCreate

Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFiltersCreate(ctx, operations.GetFiltersCreateRequest{
        Base: sdk.String("ut"),
        Exclude: sdk.String("maiores"),
        Include: sdk.String("dicta"),
        Unsafe: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFiltersFilters

Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetFiltersFilters(ctx, operations.GetFiltersFiltersRequest{
        Filters: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetInbox(ctx, operations.GetInboxRequest{
        Callback: sdk.String("dolore"),
        Filter: sdk.String("iusto"),
        Page: sdk.Int64(118727),
        Pagesize: sdk.Int64(688661),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetInboxUnread(ctx, operations.GetInboxUnreadRequest{
        Callback: sdk.String("enim"),
        Filter: sdk.String("accusamus"),
        Page: sdk.Int64(414263),
        Pagesize: sdk.Int64(918236),
        Since: sdk.Int64(64147),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInfo

Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetInfo(ctx, operations.GetInfoRequest{
        Site: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMe

Returns the user associated with the passed access_token.
 
This method returns a user.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMe(ctx, operations.GetMeRequest{
        Callback: sdk.String("quidem"),
        Filter: sdk.String("molestias"),
        Fromdate: sdk.Int64(566602),
        Max: sdk.String("pariatur"),
        Min: sdk.String("modi"),
        Order: operations.GetMeOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(523248),
        Pagesize: sdk.Int64(916723),
        Site: "quasi",
        Sort: operations.GetMeSortEnumModified.ToPointer(),
        Todate: sdk.Int64(575947),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeAnswers

Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeAnswers(ctx, operations.GetMeAnswersRequest{
        Callback: sdk.String("veritatis"),
        Filter: sdk.String("itaque"),
        Fromdate: sdk.Int64(277718),
        Max: sdk.String("enim"),
        Min: sdk.String("consequatur"),
        Order: operations.GetMeAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(842342),
        Pagesize: sdk.Int64(131797),
        Site: "deserunt",
        Sort: operations.GetMeAnswersSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(841386),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeAssociated

Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeAssociated(ctx, operations.GetMeAssociatedRequest{
        Callback: sdk.String("labore"),
        Filter: sdk.String("modi"),
        Page: sdk.Int64(183191),
        Pagesize: sdk.Int64(397821),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeBadges

Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeBadges(ctx, operations.GetMeBadgesRequest{
        Callback: sdk.String("cupiditate"),
        Filter: sdk.String("quos"),
        Fromdate: sdk.Int64(20107),
        Max: sdk.String("magni"),
        Min: sdk.String("assumenda"),
        Order: operations.GetMeBadgesOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(4695),
        Pagesize: sdk.Int64(146441),
        Site: "dolorum",
        Sort: operations.GetMeBadgesSortEnumName.ToPointer(),
        Todate: sdk.Int64(270008),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeComments

Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeComments(ctx, operations.GetMeCommentsRequest{
        Callback: sdk.String("facilis"),
        Filter: sdk.String("tempore"),
        Fromdate: sdk.Int64(288476),
        Max: sdk.String("delectus"),
        Min: sdk.String("eum"),
        Order: operations.GetMeCommentsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(756107),
        Pagesize: sdk.Int64(576157),
        Site: "aliquid",
        Sort: operations.GetMeCommentsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(896039),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeCommentsToID

Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeCommentsToID(ctx, operations.GetMeCommentsToIDRequest{
        Callback: sdk.String("sint"),
        Filter: sdk.String("officia"),
        Fromdate: sdk.Int64(223081),
        Max: sdk.String("debitis"),
        Min: sdk.String("a"),
        Order: operations.GetMeCommentsToIDOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(447125),
        Pagesize: sdk.Int64(449198),
        Site: "illum",
        Sort: operations.GetMeCommentsToIDSortEnumVotes.ToPointer(),
        ToID: 699479,
        Todate: sdk.Int64(116202),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeFavorites

Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeFavorites(ctx, operations.GetMeFavoritesRequest{
        Callback: sdk.String("magnam"),
        Filter: sdk.String("cumque"),
        Fromdate: sdk.Int64(813798),
        Max: sdk.String("ea"),
        Min: sdk.String("aliquid"),
        Order: operations.GetMeFavoritesOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(881104),
        Pagesize: sdk.Int64(249796),
        Site: "occaecati",
        Sort: operations.GetMeFavoritesSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(881736),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeInbox

Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeInbox(ctx, operations.GetMeInboxRequest{
        Callback: sdk.String("delectus"),
        Filter: sdk.String("quidem"),
        Page: sdk.Int64(588465),
        Pagesize: sdk.Int64(725255),
        Site: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeInboxUnread

Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeInboxUnread(ctx, operations.GetMeInboxUnreadRequest{
        Callback: sdk.String("blanditiis"),
        Filter: sdk.String("deleniti"),
        Page: sdk.Int64(956084),
        Pagesize: sdk.Int64(230533),
        Since: sdk.Int64(643990),
        Site: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeMentioned

Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeMentioned(ctx, operations.GetMeMentionedRequest{
        Callback: sdk.String("vel"),
        Filter: sdk.String("natus"),
        Fromdate: sdk.Int64(606393),
        Max: sdk.String("molestiae"),
        Min: sdk.String("perferendis"),
        Order: operations.GetMeMentionedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(301575),
        Pagesize: sdk.Int64(716075),
        Site: "id",
        Sort: operations.GetMeMentionedSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(290077),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeMerges

Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeMerges(ctx, operations.GetMeMergesRequest{
        Callback: sdk.String("suscipit"),
        Filter: sdk.String("natus"),
        Page: sdk.Int64(749170),
        Pagesize: sdk.Int64(428769),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeNotifications

Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeNotifications(ctx, operations.GetMeNotificationsRequest{
        Callback: sdk.String("vero"),
        Filter: sdk.String("aspernatur"),
        Page: sdk.Int64(102863),
        Pagesize: sdk.Int64(298282),
        Site: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeNotificationsUnread

Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeNotificationsUnread(ctx, operations.GetMeNotificationsUnreadRequest{
        Callback: sdk.String("excepturi"),
        Filter: sdk.String("ullam"),
        Page: sdk.Int64(590873),
        Pagesize: sdk.Int64(551816),
        Site: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMePrivileges

Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMePrivileges(ctx, operations.GetMePrivilegesRequest{
        Callback: sdk.String("accusantium"),
        Filter: sdk.String("mollitia"),
        Page: sdk.Int64(968962),
        Pagesize: sdk.Int64(652103),
        Site: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeQuestions

Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeQuestions(ctx, operations.GetMeQuestionsRequest{
        Callback: sdk.String("eum"),
        Filter: sdk.String("dolor"),
        Fromdate: sdk.Int64(896547),
        Max: sdk.String("odit"),
        Min: sdk.String("nemo"),
        Order: operations.GetMeQuestionsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(435865),
        Pagesize: sdk.Int64(984043),
        Site: "debitis",
        Sort: operations.GetMeQuestionsSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(806194),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeQuestionsFeatured

Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeQuestionsFeatured(ctx, operations.GetMeQuestionsFeaturedRequest{
        Callback: sdk.String("deleniti"),
        Filter: sdk.String("facilis"),
        Fromdate: sdk.Int64(447926),
        Max: sdk.String("architecto"),
        Min: sdk.String("architecto"),
        Order: operations.GetMeQuestionsFeaturedOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(352312),
        Pagesize: sdk.Int64(714242),
        Site: "nihil",
        Sort: operations.GetMeQuestionsFeaturedSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(841140),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeQuestionsNoAnswers

Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeQuestionsNoAnswers(ctx, operations.GetMeQuestionsNoAnswersRequest{
        Callback: sdk.String("sed"),
        Filter: sdk.String("saepe"),
        Fromdate: sdk.Int64(868126),
        Max: sdk.String("accusantium"),
        Min: sdk.String("consequuntur"),
        Order: operations.GetMeQuestionsNoAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(615560),
        Pagesize: sdk.Int64(166847),
        Site: "sunt",
        Sort: operations.GetMeQuestionsNoAnswersSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(848009),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeQuestionsUnaccepted

Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeQuestionsUnaccepted(ctx, operations.GetMeQuestionsUnacceptedRequest{
        Callback: sdk.String("pariatur"),
        Filter: sdk.String("maxime"),
        Fromdate: sdk.Int64(411397),
        Max: sdk.String("excepturi"),
        Min: sdk.String("odit"),
        Order: operations.GetMeQuestionsUnacceptedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(33222),
        Pagesize: sdk.Int64(69167),
        Site: "maiores",
        Sort: operations.GetMeQuestionsUnacceptedSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(373291),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeQuestionsUnanswered

Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeQuestionsUnanswered(ctx, operations.GetMeQuestionsUnansweredRequest{
        Callback: sdk.String("voluptate"),
        Filter: sdk.String("autem"),
        Fromdate: sdk.Int64(722056),
        Max: sdk.String("eaque"),
        Min: sdk.String("pariatur"),
        Order: operations.GetMeQuestionsUnansweredOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(975522),
        Pagesize: sdk.Int64(16627),
        Site: "fugiat",
        Sort: operations.GetMeQuestionsUnansweredSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(11714),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeReputation

Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeReputation(ctx, operations.GetMeReputationRequest{
        Callback: sdk.String("cumque"),
        Filter: sdk.String("corporis"),
        Site: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeReputationHistory

Returns user's public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeReputationHistory(ctx, operations.GetMeReputationHistoryRequest{
        Callback: sdk.String("libero"),
        Filter: sdk.String("nobis"),
        Page: sdk.Int64(171629),
        Pagesize: sdk.Int64(339404),
        Site: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeReputationHistoryFull

Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeReputationHistoryFull(ctx, operations.GetMeReputationHistoryFullRequest{
        Callback: sdk.String("dignissimos"),
        Filter: sdk.String("eaque"),
        Page: sdk.Int64(338985),
        Pagesize: sdk.Int64(199996),
        Site: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeSuggestedEdits

Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeSuggestedEdits(ctx, operations.GetMeSuggestedEditsRequest{
        Callback: sdk.String("perferendis"),
        Filter: sdk.String("dolores"),
        Fromdate: sdk.Int64(793698),
        Max: sdk.String("quam"),
        Min: sdk.String("dolor"),
        Order: operations.GetMeSuggestedEditsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(345352),
        Pagesize: sdk.Int64(944120),
        Site: "recusandae",
        Sort: operations.GetMeSuggestedEditsSortEnumApproval.ToPointer(),
        Todate: sdk.Int64(704415),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTags

Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTags(ctx, operations.GetMeTagsRequest{
        Callback: sdk.String("perspiciatis"),
        Filter: sdk.String("voluptatem"),
        Fromdate: sdk.Int64(783645),
        Max: sdk.String("consequuntur"),
        Min: sdk.String("blanditiis"),
        Order: operations.GetMeTagsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(50370),
        Pagesize: sdk.Int64(577229),
        Site: "rerum",
        Sort: operations.GetMeTagsSortEnumPopular.ToPointer(),
        Todate: sdk.Int64(992397),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTagsTagsTopAnswers

Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTagsTagsTopAnswers(ctx, operations.GetMeTagsTagsTopAnswersRequest{
        Callback: sdk.String("earum"),
        Filter: sdk.String("modi"),
        Fromdate: sdk.Int64(613966),
        Max: sdk.String("dolorum"),
        Min: sdk.String("deleniti"),
        Order: operations.GetMeTagsTagsTopAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(589910),
        Pagesize: sdk.Int64(750844),
        Site: "libero",
        Sort: operations.GetMeTagsTagsTopAnswersSortEnumVotes.ToPointer(),
        Tags: "quaerat",
        Todate: sdk.Int64(554242),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTagsTagsTopQuestions

Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTagsTagsTopQuestions(ctx, operations.GetMeTagsTagsTopQuestionsRequest{
        Callback: sdk.String("aliquid"),
        Filter: sdk.String("dolorem"),
        Fromdate: sdk.Int64(209843),
        Max: sdk.String("dolor"),
        Min: sdk.String("qui"),
        Order: operations.GetMeTagsTagsTopQuestionsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(944373),
        Pagesize: sdk.Int64(569574),
        Site: "cum",
        Sort: operations.GetMeTagsTagsTopQuestionsSortEnumHot.ToPointer(),
        Tags: "dignissimos",
        Todate: sdk.Int64(970237),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTimeline

Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTimeline(ctx, operations.GetMeTimelineRequest{
        Callback: sdk.String("amet"),
        Filter: sdk.String("dolorum"),
        Fromdate: sdk.Int64(254356),
        Page: sdk.Int64(85295),
        Pagesize: sdk.Int64(58029),
        Site: "ipsa",
        Todate: sdk.Int64(434417),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTopAnswerTags

Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTopAnswerTags(ctx, operations.GetMeTopAnswerTagsRequest{
        Callback: sdk.String("odio"),
        Filter: sdk.String("quaerat"),
        Page: sdk.Int64(881005),
        Pagesize: sdk.Int64(696344),
        Site: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeTopQuestionTags

Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeTopQuestionTags(ctx, operations.GetMeTopQuestionTagsRequest{
        Callback: sdk.String("voluptas"),
        Filter: sdk.String("natus"),
        Page: sdk.Int64(179603),
        Pagesize: sdk.Int64(542499),
        Site: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMeWritePermissions

Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetMeWritePermissions(ctx, operations.GetMeWritePermissionsRequest{
        Callback: sdk.String("fugiat"),
        Filter: sdk.String("ab"),
        Page: sdk.Int64(743835),
        Pagesize: sdk.Int64(679393),
        Site: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetNotifications(ctx, operations.GetNotificationsRequest{
        Callback: sdk.String("voluptate"),
        Filter: sdk.String("dolorum"),
        Page: sdk.Int64(536579),
        Pagesize: sdk.Int64(607045),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetNotificationsUnread(ctx, operations.GetNotificationsUnreadRequest{
        Callback: sdk.String("necessitatibus"),
        Filter: sdk.String("distinctio"),
        Page: sdk.Int64(990339),
        Pagesize: sdk.Int64(469497),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPosts

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPosts(ctx, operations.GetPostsRequest{
        Callback: sdk.String("ipsum"),
        Filter: sdk.String("voluptate"),
        Fromdate: sdk.Int64(663078),
        Max: sdk.String("saepe"),
        Min: sdk.String("eius"),
        Order: operations.GetPostsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(20651),
        Pagesize: sdk.Int64(229219),
        Site: "optio",
        Sort: operations.GetPostsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(320017),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPostsIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPostsIds(ctx, operations.GetPostsIdsRequest{
        Callback: sdk.String("saepe"),
        Filter: sdk.String("suscipit"),
        Fromdate: sdk.Int64(645785),
        Ids: "provident",
        Max: sdk.String("minima"),
        Min: sdk.String("repellendus"),
        Order: operations.GetPostsIdsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(628982),
        Pagesize: sdk.Int64(55),
        Site: "at",
        Sort: operations.GetPostsIdsSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(273542),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPostsIdsComments

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPostsIdsComments(ctx, operations.GetPostsIdsCommentsRequest{
        Callback: sdk.String("vel"),
        Filter: sdk.String("quod"),
        Fromdate: sdk.Int64(885338),
        Ids: "qui",
        Max: sdk.String("dolorum"),
        Min: sdk.String("a"),
        Order: operations.GetPostsIdsCommentsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(687488),
        Pagesize: sdk.Int64(483409),
        Site: "ipsum",
        Sort: operations.GetPostsIdsCommentsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(947371),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPostsIdsRevisions

Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPostsIdsRevisions(ctx, operations.GetPostsIdsRevisionsRequest{
        Callback: sdk.String("amet"),
        Filter: sdk.String("tempore"),
        Fromdate: sdk.Int64(880298),
        Ids: "numquam",
        Page: sdk.Int64(313692),
        Pagesize: sdk.Int64(213312),
        Site: "sapiente",
        Todate: sdk.Int64(518201),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPostsIdsSuggestedEdits

Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.

 
This method returns a list of suggested-edits.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPostsIdsSuggestedEdits(ctx, operations.GetPostsIdsSuggestedEditsRequest{
        Callback: sdk.String("nihil"),
        Filter: sdk.String("sit"),
        Fromdate: sdk.Int64(711584),
        Ids: "neque",
        Max: sdk.String("sed"),
        Min: sdk.String("vel"),
        Order: operations.GetPostsIdsSuggestedEditsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(374170),
        Pagesize: sdk.Int64(646265),
        Site: "quam",
        Sort: operations.GetPostsIdsSuggestedEditsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(277628),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPrivileges

Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetPrivileges(ctx, operations.GetPrivilegesRequest{
        Callback: sdk.String("qui"),
        Filter: sdk.String("cupiditate"),
        Page: sdk.Int64(807581),
        Pagesize: sdk.Int64(863856),
        Site: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestions

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestions(ctx, operations.GetQuestionsRequest{
        Callback: sdk.String("dicta"),
        Filter: sdk.String("laborum"),
        Fromdate: sdk.Int64(517379),
        Max: sdk.String("incidunt"),
        Min: sdk.String("aspernatur"),
        Order: operations.GetQuestionsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(716860),
        Pagesize: sdk.Int64(704474),
        Site: "aliquid",
        Sort: operations.GetQuestionsSortEnumHot.ToPointer(),
        Tagged: sdk.String("molestias"),
        Todate: sdk.Int64(840429),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsFeatured

Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsFeatured(ctx, operations.GetQuestionsFeaturedRequest{
        Callback: sdk.String("qui"),
        Filter: sdk.String("neque"),
        Fromdate: sdk.Int64(144847),
        Max: sdk.String("magni"),
        Min: sdk.String("odio"),
        Order: operations.GetQuestionsFeaturedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(355613),
        Pagesize: sdk.Int64(722081),
        Site: "hic",
        Sort: operations.GetQuestionsFeaturedSortEnumActivity.ToPointer(),
        Tagged: sdk.String("cumque"),
        Todate: sdk.Int64(746994),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsNoAnswers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsNoAnswers(ctx, operations.GetQuestionsNoAnswersRequest{
        Callback: sdk.String("nobis"),
        Filter: sdk.String("et"),
        Fromdate: sdk.Int64(903720),
        Max: sdk.String("ipsum"),
        Min: sdk.String("veritatis"),
        Order: operations.GetQuestionsNoAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(552193),
        Pagesize: sdk.Int64(731694),
        Site: "cupiditate",
        Sort: operations.GetQuestionsNoAnswersSortEnumActivity.ToPointer(),
        Tagged: sdk.String("delectus"),
        Todate: sdk.Int64(209157),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsUnanswered

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsUnanswered(ctx, operations.GetQuestionsUnansweredRequest{
        Callback: sdk.String("dolore"),
        Filter: sdk.String("labore"),
        Fromdate: sdk.Int64(240829),
        Max: sdk.String("dolorum"),
        Min: sdk.String("architecto"),
        Order: operations.GetQuestionsUnansweredOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(16429),
        Pagesize: sdk.Int64(555649),
        Site: "itaque",
        Sort: operations.GetQuestionsUnansweredSortEnumActivity.ToPointer(),
        Tagged: sdk.String("est"),
        Todate: sdk.Int64(833038),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIds(ctx, operations.GetQuestionsIdsRequest{
        Callback: sdk.String("porro"),
        Filter: sdk.String("doloribus"),
        Fromdate: sdk.Int64(281730),
        Ids: "facilis",
        Max: sdk.String("cupiditate"),
        Min: sdk.String("qui"),
        Order: operations.GetQuestionsIdsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(512393),
        Pagesize: sdk.Int64(485628),
        Site: "occaecati",
        Sort: operations.GetQuestionsIdsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(787542),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIdsAnswers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIdsAnswers(ctx, operations.GetQuestionsIdsAnswersRequest{
        Callback: sdk.String("vero"),
        Filter: sdk.String("omnis"),
        Fromdate: sdk.Int64(338159),
        Ids: "ipsum",
        Max: sdk.String("delectus"),
        Min: sdk.String("voluptate"),
        Order: operations.GetQuestionsIdsAnswersOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(878870),
        Pagesize: sdk.Int64(949319),
        Site: "dignissimos",
        Sort: operations.GetQuestionsIdsAnswersSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(715561),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIdsComments

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIdsComments(ctx, operations.GetQuestionsIdsCommentsRequest{
        Callback: sdk.String("quod"),
        Filter: sdk.String("odio"),
        Fromdate: sdk.Int64(630448),
        Ids: "facilis",
        Max: sdk.String("vero"),
        Min: sdk.String("ducimus"),
        Order: operations.GetQuestionsIdsCommentsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(844550),
        Pagesize: sdk.Int64(848944),
        Site: "sequi",
        Sort: operations.GetQuestionsIdsCommentsSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(773326),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIdsLinked

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIdsLinked(ctx, operations.GetQuestionsIdsLinkedRequest{
        Callback: sdk.String("aut"),
        Filter: sdk.String("voluptatibus"),
        Fromdate: sdk.Int64(347233),
        Ids: "nulla",
        Max: sdk.String("fugit"),
        Min: sdk.String("porro"),
        Order: operations.GetQuestionsIdsLinkedOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(985033),
        Pagesize: sdk.Int64(478370),
        Site: "eligendi",
        Sort: operations.GetQuestionsIdsLinkedSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(4048),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIdsRelated

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIdsRelated(ctx, operations.GetQuestionsIdsRelatedRequest{
        Callback: sdk.String("officia"),
        Filter: sdk.String("tempora"),
        Fromdate: sdk.Int64(368584),
        Ids: "ea",
        Max: sdk.String("aspernatur"),
        Min: sdk.String("vel"),
        Order: operations.GetQuestionsIdsRelatedOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(297842),
        Pagesize: sdk.Int64(189848),
        Site: "ex",
        Sort: operations.GetQuestionsIdsRelatedSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(120657),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetQuestionsIdsTimeline

Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetQuestionsIdsTimeline(ctx, operations.GetQuestionsIdsTimelineRequest{
        Callback: sdk.String("dolor"),
        Filter: sdk.String("maiores"),
        Fromdate: sdk.Int64(97844),
        Ids: "ex",
        Page: sdk.Int64(862192),
        Pagesize: sdk.Int64(569211),
        Site: "voluptatibus",
        Todate: sdk.Int64(343605),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetRevisionsIds

Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetRevisionsIds(ctx, operations.GetRevisionsIdsRequest{
        Callback: sdk.String("sapiente"),
        Filter: sdk.String("quisquam"),
        Fromdate: sdk.Int64(906556),
        Ids: "ea",
        Page: sdk.Int64(774048),
        Pagesize: sdk.Int64(359271),
        Site: "veniam",
        Todate: sdk.Int64(399499),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSearch

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSearch(ctx, operations.GetSearchRequest{
        Callback: sdk.String("inventore"),
        Filter: sdk.String("magnam"),
        Fromdate: sdk.Int64(407241),
        Intitle: sdk.String("quo"),
        Max: sdk.String("consectetur"),
        Min: sdk.String("recusandae"),
        Nottagged: sdk.String("aspernatur"),
        Order: operations.GetSearchOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(53427),
        Pagesize: sdk.Int64(952871),
        Site: "libero",
        Sort: operations.GetSearchSortEnumActivity.ToPointer(),
        Tagged: sdk.String("aut"),
        Todate: sdk.Int64(533466),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSearchAdvanced

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSearchAdvanced(ctx, operations.GetSearchAdvancedRequest{
        Accepted: operations.GetSearchAdvancedAcceptedEnumFalse.ToPointer(),
        Answers: sdk.Int64(304582),
        Body: sdk.String("fugit"),
        Callback: sdk.String("accusamus"),
        Closed: operations.GetSearchAdvancedClosedEnumTrue.ToPointer(),
        Filter: sdk.String("non"),
        Fromdate: sdk.Int64(89603),
        Max: sdk.String("dolorum"),
        Migrated: operations.GetSearchAdvancedMigratedEnumFalse.ToPointer(),
        Min: sdk.String("placeat"),
        Notice: operations.GetSearchAdvancedNoticeEnumTrue.ToPointer(),
        Nottagged: sdk.String("eum"),
        Order: operations.GetSearchAdvancedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(752135),
        Pagesize: sdk.Int64(557369),
        Q: sdk.String("assumenda"),
        Site: "nulla",
        Sort: operations.GetSearchAdvancedSortEnumCreation.ToPointer(),
        Tagged: sdk.String("libero"),
        Title: sdk.String("Mr."),
        Todate: sdk.Int64(270328),
        URL: sdk.String("numquam"),
        User: sdk.Int64(131482),
        Views: sdk.Int64(591935),
        Wiki: operations.GetSearchAdvancedWikiEnumTrue.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSimilar

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSimilar(ctx, operations.GetSimilarRequest{
        Callback: sdk.String("molestiae"),
        Filter: sdk.String("magnam"),
        Fromdate: sdk.Int64(487935),
        Max: sdk.String("eius"),
        Min: sdk.String("esse"),
        Nottagged: sdk.String("esse"),
        Order: operations.GetSimilarOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(683282),
        Pagesize: sdk.Int64(442015),
        Site: "quidem",
        Sort: operations.GetSimilarSortEnumRelevance.ToPointer(),
        Tagged: sdk.String("ut"),
        Title: sdk.String("Ms."),
        Todate: sdk.Int64(379927),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSites

Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSites(ctx, operations.GetSitesRequest{
        Callback: sdk.String("assumenda"),
        Filter: sdk.String("eos"),
        Page: sdk.Int64(509342),
        Pagesize: sdk.Int64(788546),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSuggestedEdits

Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSuggestedEdits(ctx, operations.GetSuggestedEditsRequest{
        Callback: sdk.String("veritatis"),
        Filter: sdk.String("ipsa"),
        Fromdate: sdk.Int64(660040),
        Max: sdk.String("quidem"),
        Min: sdk.String("neque"),
        Order: operations.GetSuggestedEditsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(847276),
        Pagesize: sdk.Int64(777408),
        Site: "fuga",
        Sort: operations.GetSuggestedEditsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(178367),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetSuggestedEditsIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetSuggestedEditsIds(ctx, operations.GetSuggestedEditsIdsRequest{
        Callback: sdk.String("voluptas"),
        Filter: sdk.String("ab"),
        Fromdate: sdk.Int64(587600),
        Ids: "consequatur",
        Max: sdk.String("tempora"),
        Min: sdk.String("debitis"),
        Order: operations.GetSuggestedEditsIdsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(133465),
        Pagesize: sdk.Int64(197054),
        Site: "quo",
        Sort: operations.GetSuggestedEditsIdsSortEnumApproval.ToPointer(),
        Todate: sdk.Int64(925164),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTags

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTags(ctx, operations.GetTagsRequest{
        Callback: sdk.String("aperiam"),
        Filter: sdk.String("distinctio"),
        Fromdate: sdk.Int64(799796),
        Inname: sdk.String("dignissimos"),
        Max: sdk.String("inventore"),
        Min: sdk.String("nihil"),
        Order: operations.GetTagsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(882710),
        Pagesize: sdk.Int64(306810),
        Site: "odio",
        Sort: operations.GetTagsSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(414567),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsModeratorOnly

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsModeratorOnly(ctx, operations.GetTagsModeratorOnlyRequest{
        Callback: sdk.String("sapiente"),
        Filter: sdk.String("dolores"),
        Fromdate: sdk.Int64(645570),
        Inname: sdk.String("molestiae"),
        Max: sdk.String("accusantium"),
        Min: sdk.String("porro"),
        Order: operations.GetTagsModeratorOnlyOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(556429),
        Pagesize: sdk.Int64(510017),
        Site: "consequuntur",
        Sort: operations.GetTagsModeratorOnlySortEnumActivity.ToPointer(),
        Todate: sdk.Int64(143829),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsRequired

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsRequired(ctx, operations.GetTagsRequiredRequest{
        Callback: sdk.String("fuga"),
        Filter: sdk.String("mollitia"),
        Fromdate: sdk.Int64(277596),
        Inname: sdk.String("atque"),
        Max: sdk.String("explicabo"),
        Min: sdk.String("minima"),
        Order: operations.GetTagsRequiredOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(147014),
        Pagesize: sdk.Int64(956406),
        Site: "consequuntur",
        Sort: operations.GetTagsRequiredSortEnumPopular.ToPointer(),
        Todate: sdk.Int64(129412),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsSynonyms

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsSynonyms(ctx, operations.GetTagsSynonymsRequest{
        Callback: sdk.String("saepe"),
        Filter: sdk.String("occaecati"),
        Fromdate: sdk.Int64(543806),
        Max: sdk.String("et"),
        Min: sdk.String("esse"),
        Order: operations.GetTagsSynonymsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(882042),
        Pagesize: sdk.Int64(82971),
        Site: "esse",
        Sort: operations.GetTagsSynonymsSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(724168),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagsFaq

Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagsFaq(ctx, operations.GetTagsTagsFaqRequest{
        Callback: sdk.String("vero"),
        Filter: sdk.String("aliquid"),
        Page: sdk.Int64(93459),
        Pagesize: sdk.Int64(904045),
        Site: "vel",
        Tags: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagsInfo

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagsInfo(ctx, operations.GetTagsTagsInfoRequest{
        Callback: sdk.String("molestiae"),
        Filter: sdk.String("rerum"),
        Fromdate: sdk.Int64(580197),
        Max: sdk.String("minima"),
        Min: sdk.String("distinctio"),
        Order: operations.GetTagsTagsInfoOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(27069),
        Pagesize: sdk.Int64(636061),
        Site: "tempore",
        Sort: operations.GetTagsTagsInfoSortEnumPopular.ToPointer(),
        Tags: "cumque",
        Todate: sdk.Int64(160538),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagsRelated

Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagsRelated(ctx, operations.GetTagsTagsRelatedRequest{
        Callback: sdk.String("consequatur"),
        Filter: sdk.String("minus"),
        Page: sdk.Int64(308286),
        Pagesize: sdk.Int64(959167),
        Site: "consectetur",
        Tags: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagsSynonyms

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagsSynonyms(ctx, operations.GetTagsTagsSynonymsRequest{
        Callback: sdk.String("blanditiis"),
        Filter: sdk.String("provident"),
        Fromdate: sdk.Int64(953722),
        Max: sdk.String("nulla"),
        Min: sdk.String("quas"),
        Order: operations.GetTagsTagsSynonymsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(97468),
        Pagesize: sdk.Int64(951875),
        Site: "error",
        Sort: operations.GetTagsTagsSynonymsSortEnumApplied.ToPointer(),
        Tags: "pariatur",
        Todate: sdk.Int64(820767),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagsWikis

Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagsWikis(ctx, operations.GetTagsTagsWikisRequest{
        Callback: sdk.String("quia"),
        Filter: sdk.String("eveniet"),
        Page: sdk.Int64(992430),
        Pagesize: sdk.Int64(815524),
        Site: "veritatis",
        Tags: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagTopAnswerersPeriod

Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagTopAnswerersPeriod(ctx, operations.GetTagsTagTopAnswerersPeriodRequest{
        Callback: sdk.String("quasi"),
        Filter: sdk.String("similique"),
        Page: sdk.Int64(633608),
        Pagesize: sdk.Int64(398434),
        Period: operations.GetTagsTagTopAnswerersPeriodPeriodEnumMonth,
        Site: "quae",
        Tag: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetTagsTagTopAskersPeriod

Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTagsTagTopAskersPeriod(ctx, operations.GetTagsTagTopAskersPeriodRequest{
        Callback: sdk.String("vel"),
        Filter: sdk.String("in"),
        Page: sdk.Int64(258684),
        Pagesize: sdk.Int64(727697),
        Period: operations.GetTagsTagTopAskersPeriodPeriodEnumMonth,
        Site: "soluta",
        Tag: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsers(ctx, operations.GetUsersRequest{
        Callback: sdk.String("aliquam"),
        Filter: sdk.String("sapiente"),
        Fromdate: sdk.Int64(119771),
        Inname: sdk.String("ullam"),
        Max: sdk.String("reprehenderit"),
        Min: sdk.String("ullam"),
        Order: operations.GetUsersOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(16328),
        Pagesize: sdk.Int64(531849),
        Site: "qui",
        Sort: operations.GetUsersSortEnumModified.ToPointer(),
        Todate: sdk.Int64(401259),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersModerators

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersModerators(ctx, operations.GetUsersModeratorsRequest{
        Callback: sdk.String("deleniti"),
        Filter: sdk.String("itaque"),
        Fromdate: sdk.Int64(680270),
        Max: sdk.String("architecto"),
        Min: sdk.String("omnis"),
        Order: operations.GetUsersModeratorsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(98478),
        Pagesize: sdk.Int64(869489),
        Site: "et",
        Sort: operations.GetUsersModeratorsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(55965),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersModeratorsElected

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersModeratorsElected(ctx, operations.GetUsersModeratorsElectedRequest{
        Callback: sdk.String("minima"),
        Filter: sdk.String("veritatis"),
        Fromdate: sdk.Int64(232744),
        Max: sdk.String("adipisci"),
        Min: sdk.String("iste"),
        Order: operations.GetUsersModeratorsElectedOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(33074),
        Pagesize: sdk.Int64(522371),
        Site: "aut",
        Sort: operations.GetUsersModeratorsElectedSortEnumName.ToPointer(),
        Todate: sdk.Int64(428796),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIds

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIds(ctx, operations.GetUsersIdsRequest{
        Callback: sdk.String("mollitia"),
        Filter: sdk.String("ab"),
        Fromdate: sdk.Int64(544591),
        Ids: "non",
        Max: sdk.String("voluptatem"),
        Min: sdk.String("dolor"),
        Order: operations.GetUsersIdsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(253191),
        Pagesize: sdk.Int64(771089),
        Site: "explicabo",
        Sort: operations.GetUsersIdsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(12036),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsAnswers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsAnswers(ctx, operations.GetUsersIdsAnswersRequest{
        Callback: sdk.String("dignissimos"),
        Filter: sdk.String("dicta"),
        Fromdate: sdk.Int64(981640),
        Ids: "natus",
        Max: sdk.String("velit"),
        Min: sdk.String("voluptatibus"),
        Order: operations.GetUsersIdsAnswersOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(990345),
        Pagesize: sdk.Int64(45659),
        Site: "ea",
        Sort: operations.GetUsersIdsAnswersSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(162954),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsAssociated

Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsAssociated(ctx, operations.GetUsersIdsAssociatedRequest{
        Callback: sdk.String("repellendus"),
        Filter: sdk.String("officia"),
        Ids: "maxime",
        Page: sdk.Int64(490305),
        Pagesize: sdk.Int64(640024),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsBadges

Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsBadges(ctx, operations.GetUsersIdsBadgesRequest{
        Callback: sdk.String("asperiores"),
        Filter: sdk.String("nemo"),
        Fromdate: sdk.Int64(65304),
        Ids: "quaerat",
        Max: sdk.String("porro"),
        Min: sdk.String("quod"),
        Order: operations.GetUsersIdsBadgesOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(70447),
        Pagesize: sdk.Int64(241418),
        Site: "fuga",
        Sort: operations.GetUsersIdsBadgesSortEnumType.ToPointer(),
        Todate: sdk.Int64(380729),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsComments

Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsComments(ctx, operations.GetUsersIdsCommentsRequest{
        Callback: sdk.String("velit"),
        Filter: sdk.String("culpa"),
        Fromdate: sdk.Int64(665859),
        Ids: "recusandae",
        Max: sdk.String("totam"),
        Min: sdk.String("fugiat"),
        Order: operations.GetUsersIdsCommentsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(497678),
        Pagesize: sdk.Int64(554688),
        Site: "vel",
        Sort: operations.GetUsersIdsCommentsSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(822560),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsCommentsToid

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsCommentsToid(ctx, operations.GetUsersIdsCommentsToidRequest{
        Callback: sdk.String("facilis"),
        Filter: sdk.String("cum"),
        Fromdate: sdk.Int64(414857),
        Ids: "in",
        Max: sdk.String("corporis"),
        Min: sdk.String("reiciendis"),
        Order: operations.GetUsersIdsCommentsToidOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(363161),
        Pagesize: sdk.Int64(924967),
        Site: "aliquid",
        Sort: operations.GetUsersIdsCommentsToidSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(738683),
        Toid: 232627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsFavorites

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsFavorites(ctx, operations.GetUsersIdsFavoritesRequest{
        Callback: sdk.String("in"),
        Filter: sdk.String("exercitationem"),
        Fromdate: sdk.Int64(937285),
        Ids: "facere",
        Max: sdk.String("numquam"),
        Min: sdk.String("doloribus"),
        Order: operations.GetUsersIdsFavoritesOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(968972),
        Pagesize: sdk.Int64(697142),
        Site: "saepe",
        Sort: operations.GetUsersIdsFavoritesSortEnumAdded.ToPointer(),
        Todate: sdk.Int64(296556),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsMentioned

Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsMentioned(ctx, operations.GetUsersIdsMentionedRequest{
        Callback: sdk.String("sunt"),
        Filter: sdk.String("asperiores"),
        Fromdate: sdk.Int64(241545),
        Ids: "non",
        Max: sdk.String("amet"),
        Min: sdk.String("beatae"),
        Order: operations.GetUsersIdsMentionedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(950953),
        Pagesize: sdk.Int64(891523),
        Site: "consectetur",
        Sort: operations.GetUsersIdsMentionedSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(689768),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsMerges

Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsMerges(ctx, operations.GetUsersIdsMergesRequest{
        Callback: sdk.String("laboriosam"),
        Filter: sdk.String("ipsa"),
        Ids: "voluptates",
        Page: sdk.Int64(730709),
        Pagesize: sdk.Int64(113816),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsQuestions

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsQuestions(ctx, operations.GetUsersIdsQuestionsRequest{
        Callback: sdk.String("accusamus"),
        Filter: sdk.String("similique"),
        Fromdate: sdk.Int64(272437),
        Ids: "aspernatur",
        Max: sdk.String("voluptas"),
        Min: sdk.String("voluptas"),
        Order: operations.GetUsersIdsQuestionsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(324405),
        Pagesize: sdk.Int64(748789),
        Site: "dolorum",
        Sort: operations.GetUsersIdsQuestionsSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(795535),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsQuestionsFeatured

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsQuestionsFeatured(ctx, operations.GetUsersIdsQuestionsFeaturedRequest{
        Callback: sdk.String("dolores"),
        Filter: sdk.String("blanditiis"),
        Fromdate: sdk.Int64(449292),
        Ids: "dolore",
        Max: sdk.String("aliquam"),
        Min: sdk.String("officiis"),
        Order: operations.GetUsersIdsQuestionsFeaturedOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(351870),
        Pagesize: sdk.Int64(237742),
        Site: "cum",
        Sort: operations.GetUsersIdsQuestionsFeaturedSortEnumCreation.ToPointer(),
        Todate: sdk.Int64(555361),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsQuestionsNoAnswers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsQuestionsNoAnswers(ctx, operations.GetUsersIdsQuestionsNoAnswersRequest{
        Callback: sdk.String("hic"),
        Filter: sdk.String("nesciunt"),
        Fromdate: sdk.Int64(633998),
        Ids: "corrupti",
        Max: sdk.String("pariatur"),
        Min: sdk.String("totam"),
        Order: operations.GetUsersIdsQuestionsNoAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(348783),
        Pagesize: sdk.Int64(750765),
        Site: "sit",
        Sort: operations.GetUsersIdsQuestionsNoAnswersSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(148829),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsQuestionsUnaccepted

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsQuestionsUnaccepted(ctx, operations.GetUsersIdsQuestionsUnacceptedRequest{
        Callback: sdk.String("reiciendis"),
        Filter: sdk.String("explicabo"),
        Fromdate: sdk.Int64(994401),
        Ids: "facilis",
        Max: sdk.String("voluptate"),
        Min: sdk.String("expedita"),
        Order: operations.GetUsersIdsQuestionsUnacceptedOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(611749),
        Pagesize: sdk.Int64(292794),
        Site: "laborum",
        Sort: operations.GetUsersIdsQuestionsUnacceptedSortEnumActivity.ToPointer(),
        Todate: sdk.Int64(447516),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsQuestionsUnanswered

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsQuestionsUnanswered(ctx, operations.GetUsersIdsQuestionsUnansweredRequest{
        Callback: sdk.String("commodi"),
        Filter: sdk.String("quidem"),
        Fromdate: sdk.Int64(131289),
        Ids: "voluptas",
        Max: sdk.String("unde"),
        Min: sdk.String("architecto"),
        Order: operations.GetUsersIdsQuestionsUnansweredOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(960257),
        Pagesize: sdk.Int64(895386),
        Site: "illo",
        Sort: operations.GetUsersIdsQuestionsUnansweredSortEnumVotes.ToPointer(),
        Todate: sdk.Int64(19300),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsReputation

Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsReputation(ctx, operations.GetUsersIdsReputationRequest{
        Callback: sdk.String("corrupti"),
        Filter: sdk.String("maiores"),
        Fromdate: sdk.Int64(274823),
        Ids: "sed",
        Page: sdk.Int64(592231),
        Pagesize: sdk.Int64(258702),
        Site: "necessitatibus",
        Todate: sdk.Int64(215529),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsReputationHistory

Returns users' public reputation history.
 
This method returns a list of reputation_history.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsReputationHistory(ctx, operations.GetUsersIdsReputationHistoryRequest{
        Callback: sdk.String("ea"),
        Filter: sdk.String("occaecati"),
        Ids: "quos",
        Page: sdk.Int64(975752),
        Pagesize: sdk.Int64(271653),
        Site: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsSuggestedEdits

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsSuggestedEdits(ctx, operations.GetUsersIdsSuggestedEditsRequest{
        Callback: sdk.String("voluptate"),
        Filter: sdk.String("reiciendis"),
        Fromdate: sdk.Int64(401713),
        Ids: "sit",
        Max: sdk.String("non"),
        Min: sdk.String("officiis"),
        Order: operations.GetUsersIdsSuggestedEditsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(708609),
        Pagesize: sdk.Int64(310381),
        Site: "incidunt",
        Sort: operations.GetUsersIdsSuggestedEditsSortEnumApproval.ToPointer(),
        Todate: sdk.Int64(894864),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsTags

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsTags(ctx, operations.GetUsersIdsTagsRequest{
        Callback: sdk.String("rem"),
        Filter: sdk.String("sit"),
        Fromdate: sdk.Int64(750595),
        Ids: "error",
        Max: sdk.String("veniam"),
        Min: sdk.String("minima"),
        Order: operations.GetUsersIdsTagsOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(967122),
        Pagesize: sdk.Int64(862319),
        Site: "magni",
        Sort: operations.GetUsersIdsTagsSortEnumPopular.ToPointer(),
        Todate: sdk.Int64(901483),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIdsTimeline

Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIdsTimeline(ctx, operations.GetUsersIdsTimelineRequest{
        Callback: sdk.String("numquam"),
        Filter: sdk.String("veniam"),
        Fromdate: sdk.Int64(446135),
        Ids: "officiis",
        Page: sdk.Int64(104627),
        Pagesize: sdk.Int64(512452),
        Site: "exercitationem",
        Todate: sdk.Int64(510629),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDInbox

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDInbox(ctx, operations.GetUsersIDInboxRequest{
        Callback: sdk.String("cum"),
        Filter: sdk.String("laboriosam"),
        ID: 680515,
        Page: sdk.Int64(530089),
        Pagesize: sdk.Int64(622385),
        Site: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDInboxUnread

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDInboxUnread(ctx, operations.GetUsersIDInboxUnreadRequest{
        Callback: sdk.String("expedita"),
        Filter: sdk.String("debitis"),
        ID: 204923,
        Page: sdk.Int64(677115),
        Pagesize: sdk.Int64(341698),
        Since: sdk.Int64(639028),
        Site: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDNotifications

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDNotifications(ctx, operations.GetUsersIDNotificationsRequest{
        Callback: sdk.String("corrupti"),
        Filter: sdk.String("accusamus"),
        ID: 272683,
        Page: sdk.Int64(543678),
        Pagesize: sdk.Int64(148268),
        Site: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDNotificationsUnread

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDNotificationsUnread(ctx, operations.GetUsersIDNotificationsUnreadRequest{
        Callback: sdk.String("fugiat"),
        Filter: sdk.String("voluptatem"),
        ID: 635057,
        Page: sdk.Int64(710337),
        Pagesize: sdk.Int64(299643),
        Site: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDPrivileges

Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDPrivileges(ctx, operations.GetUsersIDPrivilegesRequest{
        Callback: sdk.String("esse"),
        Filter: sdk.String("ipsam"),
        ID: 24527,
        Page: sdk.Int64(530537),
        Pagesize: sdk.Int64(558065),
        Site: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDReputationHistoryFull

Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDReputationHistoryFull(ctx, operations.GetUsersIDReputationHistoryFullRequest{
        Callback: sdk.String("corporis"),
        Filter: sdk.String("et"),
        ID: 502710,
        Page: sdk.Int64(405942),
        Pagesize: sdk.Int64(153627),
        Site: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDTagsTagsTopAnswers

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDTagsTagsTopAnswers(ctx, operations.GetUsersIDTagsTagsTopAnswersRequest{
        Callback: sdk.String("vel"),
        Filter: sdk.String("nostrum"),
        Fromdate: sdk.Int64(906172),
        ID: 622231,
        Max: sdk.String("consequatur"),
        Min: sdk.String("incidunt"),
        Order: operations.GetUsersIDTagsTagsTopAnswersOrderEnumAsc.ToPointer(),
        Page: sdk.Int64(209750),
        Pagesize: sdk.Int64(690894),
        Site: "dicta",
        Sort: operations.GetUsersIDTagsTagsTopAnswersSortEnumActivity.ToPointer(),
        Tags: "occaecati",
        Todate: sdk.Int64(289776),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDTagsTagsTopQuestions

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDTagsTagsTopQuestions(ctx, operations.GetUsersIDTagsTagsTopQuestionsRequest{
        Callback: sdk.String("quidem"),
        Filter: sdk.String("atque"),
        Fromdate: sdk.Int64(671957),
        ID: 724148,
        Max: sdk.String("tenetur"),
        Min: sdk.String("laboriosam"),
        Order: operations.GetUsersIDTagsTagsTopQuestionsOrderEnumDesc.ToPointer(),
        Page: sdk.Int64(227084),
        Pagesize: sdk.Int64(647197),
        Site: "voluptate",
        Sort: operations.GetUsersIDTagsTagsTopQuestionsSortEnumCreation.ToPointer(),
        Tags: "reiciendis",
        Todate: sdk.Int64(588740),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDTopAnswerTags

Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDTopAnswerTags(ctx, operations.GetUsersIDTopAnswerTagsRequest{
        Callback: sdk.String("repellendus"),
        Filter: sdk.String("delectus"),
        ID: 914791,
        Page: sdk.Int64(16871),
        Pagesize: sdk.Int64(667285),
        Site: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDTopQuestionTags

Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDTopQuestionTags(ctx, operations.GetUsersIDTopQuestionTagsRequest{
        Callback: sdk.String("reprehenderit"),
        Filter: sdk.String("facere"),
        ID: 685092,
        Page: sdk.Int64(509807),
        Pagesize: sdk.Int64(648598),
        Site: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetUsersIDWritePermissions

Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetUsersIDWritePermissions(ctx, operations.GetUsersIDWritePermissionsRequest{
        Callback: sdk.String("voluptatem"),
        Filter: sdk.String("quisquam"),
        ID: 919532,
        Page: sdk.Int64(97243),
        Pagesize: sdk.Int64(542457),
        Site: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostCommentsIDDelete

Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCommentsIDDelete(ctx, operations.PostCommentsIDDeleteRequest{
        Callback: sdk.String("asperiores"),
        Filter: sdk.String("totam"),
        ID: 383103,
        Preview: sdk.Bool(false),
        Site: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCommentsIDEdit

Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCommentsIDEdit(ctx, operations.PostCommentsIDEditRequest{
        Body: sdk.String("maxime"),
        Callback: sdk.String("et"),
        Filter: sdk.String("esse"),
        ID: 227759,
        Preview: sdk.Bool(false),
        Site: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostPostsIDCommentsAdd

Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostPostsIDCommentsAdd(ctx, operations.PostPostsIDCommentsAddRequest{
        Body: sdk.String("ea"),
        Callback: sdk.String("atque"),
        Filter: sdk.String("error"),
        ID: 887265,
        Preview: sdk.Bool(false),
        Site: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
