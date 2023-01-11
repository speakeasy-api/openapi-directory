package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTweetsByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=expansions")
    public openapisdk.models.shared.TweetExpansionsParameterEnum[] expansions;
    public FindTweetsByIdQueryParams withExpansions(openapisdk.models.shared.TweetExpansionsParameterEnum[] expansions) {
        this.expansions = expansions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public FindTweetsByIdQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=media.fields")
    public openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields;
    public FindTweetsByIdQueryParams withMediaFields(openapisdk.models.shared.MediaFieldsParameterEnum[] mediaFields) {
        this.mediaFields = mediaFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=place.fields")
    public openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields;
    public FindTweetsByIdQueryParams withPlaceFields(openapisdk.models.shared.PlaceFieldsParameterEnum[] placeFields) {
        this.placeFields = placeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=poll.fields")
    public openapisdk.models.shared.PollFieldsParameterEnum[] pollFields;
    public FindTweetsByIdQueryParams withPollFields(openapisdk.models.shared.PollFieldsParameterEnum[] pollFields) {
        this.pollFields = pollFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=tweet.fields")
    public openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields;
    public FindTweetsByIdQueryParams withTweetFields(openapisdk.models.shared.TweetFieldsParameterEnum[] tweetFields) {
        this.tweetFields = tweetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=user.fields")
    public openapisdk.models.shared.UserFieldsParameterEnum[] userFields;
    public FindTweetsByIdQueryParams withUserFields(openapisdk.models.shared.UserFieldsParameterEnum[] userFields) {
        this.userFields = userFields;
        return this;
    }
}