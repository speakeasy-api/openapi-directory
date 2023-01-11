package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhonePlaybackRequestBody {
    @SpeakeasyMetadata("form:name=audio-url")
    public String audioUrl;
    public PhonePlaybackRequestBody withAudioUrl(String audioUrl) {
        this.audioUrl = audioUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit")
    public Integer limit;
    public PhonePlaybackRequestBody withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit-ttl")
    public Integer limitTtl;
    public PhonePlaybackRequestBody withLimitTtl(Integer limitTtl) {
        this.limitTtl = limitTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public PhonePlaybackRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public PhonePlaybackRequestBodyOutputCaseEnum outputCase;
    public PhonePlaybackRequestBody withOutputCase(PhonePlaybackRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}