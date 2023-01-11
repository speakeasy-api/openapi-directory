package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindUserByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=expansions")
    public openapisdk.models.shared.UserExpansionsParameterEnum[] expansions;
    public FindUserByIdQueryParams withExpansions(openapisdk.models.shared.UserExpansionsParameterEnum[] expansions) {
        this.expansions = expansions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=media.fields")
    public openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields;
    public FindUserByIdQueryParams withMediaFields(openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields) {
        this.mediaFields = mediaFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=place.fields")
    public openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields;
    public FindUserByIdQueryParams withPlaceFields(openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields) {
        this.placeFields = placeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=poll.fields")
    public openapisdk.models.shared.PollFieldsParameterEnum[] pollFields;
    public FindUserByIdQueryParams withPollFields(openapisdk.models.shared.PollFieldsParameterEnum[] pollFields) {
        this.pollFields = pollFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tweet.fields")
    public openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields;
    public FindUserByIdQueryParams withTweetFields(openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields) {
        this.tweetFields = tweetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=user.fields")
    public openapisdk.models.shared.UserFieldsParameterEnum[] userFields;
    public FindUserByIdQueryParams withUserFields(openapisdk.models.shared.UserFieldsParameterEnum[] userFields) {
        this.userFields = userFields;
        return this;
    }
}