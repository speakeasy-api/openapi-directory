package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindUsersByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=expansions")
    public openapisdk.models.shared.UserExpansionsParameterEnum[] expansions;
    public FindUsersByIdQueryParams withExpansions(openapisdk.models.shared.UserExpansionsParameterEnum[] expansions) {
        this.expansions = expansions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public FindUsersByIdQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=media.fields")
    public openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields;
    public FindUsersByIdQueryParams withMediaFields(openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields) {
        this.mediaFields = mediaFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=place.fields")
    public openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields;
    public FindUsersByIdQueryParams withPlaceFields(openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields) {
        this.placeFields = placeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=poll.fields")
    public openapisdk.models.shared.PollFieldsParameterEnum[] pollFields;
    public FindUsersByIdQueryParams withPollFields(openapisdk.models.shared.PollFieldsParameterEnum[] pollFields) {
        this.pollFields = pollFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tweet.fields")
    public openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields;
    public FindUsersByIdQueryParams withTweetFields(openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields) {
        this.tweetFields = tweetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=user.fields")
    public openapisdk.models.shared.UserFieldsParameterEnum[] userFields;
    public FindUsersByIdQueryParams withUserFields(openapisdk.models.shared.UserFieldsParameterEnum[] userFields) {
        this.userFields = userFields;
        return this;
    }
}