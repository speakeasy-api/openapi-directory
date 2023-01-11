package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTweetByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=expansions")
    public openapisdk.models.shared.TweetExpansionsParameterEnum[] expansions;
    public FindTweetByIdQueryParams withExpansions(openapisdk.models.shared.TweetExpansionsParameterEnum[] expansions) {
        this.expansions = expansions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=media.fields")
    public openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields;
    public FindTweetByIdQueryParams withMediaFields(openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields) {
        this.mediaFields = mediaFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=place.fields")
    public openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields;
    public FindTweetByIdQueryParams withPlaceFields(openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields) {
        this.placeFields = placeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=poll.fields")
    public openapisdk.models.shared.PollFieldsParameterEnum[] pollFields;
    public FindTweetByIdQueryParams withPollFields(openapisdk.models.shared.PollFieldsParameterEnum[] pollFields) {
        this.pollFields = pollFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tweet.fields")
    public openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields;
    public FindTweetByIdQueryParams withTweetFields(openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields) {
        this.tweetFields = tweetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=user.fields")
    public openapisdk.models.shared.UserFieldsParameterEnum[] userFields;
    public FindTweetByIdQueryParams withUserFields(openapisdk.models.shared.UserFieldsParameterEnum[] userFields) {
        this.userFields = userFields;
        return this;
    }
}