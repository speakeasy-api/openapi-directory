/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateCallRecordingCreateCallRecordingRequest {
    /**
     * The number of channels used in the recording. Can be: `mono` or `dual` and the default is `mono`. `mono` records all parties of the call into one channel. `dual` records each party of a 2-party call into separate channels.
     */
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;

    public CreateCallRecordingCreateCallRecordingRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    
    /**
     * The URL we should call using the `recording_status_callback_method` on each recording event specified in  `recording_status_callback_event`. For more information, see [RecordingStatusCallback parameters](https://www.twilio.com/docs/voice/api/recording#recordingstatuscallback).
     */
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;

    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    
    /**
     * The recording status events on which we should call the `recording_status_callback` URL. Can be: `in-progress`, `completed` and `absent` and the default is `completed`. Separate multiple event values with a space.
     */
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackEvent")
    public String[] recordingStatusCallbackEvent;

    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallbackEvent(String[] recordingStatusCallbackEvent) {
        this.recordingStatusCallbackEvent = recordingStatusCallbackEvent;
        return this;
    }
    
    /**
     * The HTTP method we should use to call `recording_status_callback`. Can be: `GET` or `POST` and the default is `POST`.
     */
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;

    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallbackMethod(CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    
    /**
     * The audio track to record for the call. Can be: `inbound`, `outbound` or `both`. The default is `both`. `inbound` records the audio that is received by Twilio. `outbound` records the audio that is generated from Twilio. `both` records the audio that is received and generated by Twilio.
     */
    @SpeakeasyMetadata("form:name=RecordingTrack")
    public String recordingTrack;

    public CreateCallRecordingCreateCallRecordingRequest withRecordingTrack(String recordingTrack) {
        this.recordingTrack = recordingTrack;
        return this;
    }
    
    /**
     * Whether to trim any leading and trailing silence in the recording. Can be: `trim-silence` or `do-not-trim` and the default is `do-not-trim`. `trim-silence` trims the silence from the beginning and end of the recording and `do-not-trim` does not.
     */
    @SpeakeasyMetadata("form:name=Trim")
    public String trim;

    public CreateCallRecordingCreateCallRecordingRequest withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    
    public CreateCallRecordingCreateCallRecordingRequest(){}
}
