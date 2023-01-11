package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationCreateNotificationRequest {
    @SpeakeasyMetadata("form:name=Action")
    public String action;
    public CreateNotificationCreateNotificationRequest withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("form:name=Alexa")
    public Object alexa;
    public CreateNotificationCreateNotificationRequest withAlexa(Object alexa) {
        this.alexa = alexa;
        return this;
    }
    @SpeakeasyMetadata("form:name=Apn")
    public Object apn;
    public CreateNotificationCreateNotificationRequest withApn(Object apn) {
        this.apn = apn;
        return this;
    }
    @SpeakeasyMetadata("form:name=Body")
    public String body;
    public CreateNotificationCreateNotificationRequest withBody(String body) {
        this.body = body;
        return this;
    }
    @SpeakeasyMetadata("form:name=Data")
    public Object data;
    public CreateNotificationCreateNotificationRequest withData(Object data) {
        this.data = data;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryCallbackUrl")
    public String deliveryCallbackUrl;
    public CreateNotificationCreateNotificationRequest withDeliveryCallbackUrl(String deliveryCallbackUrl) {
        this.deliveryCallbackUrl = deliveryCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FacebookMessenger")
    public Object facebookMessenger;
    public CreateNotificationCreateNotificationRequest withFacebookMessenger(Object facebookMessenger) {
        this.facebookMessenger = facebookMessenger;
        return this;
    }
    @SpeakeasyMetadata("form:name=Fcm")
    public Object fcm;
    public CreateNotificationCreateNotificationRequest withFcm(Object fcm) {
        this.fcm = fcm;
        return this;
    }
    @SpeakeasyMetadata("form:name=Gcm")
    public Object gcm;
    public CreateNotificationCreateNotificationRequest withGcm(Object gcm) {
        this.gcm = gcm;
        return this;
    }
    @SpeakeasyMetadata("form:name=Identity")
    public String[] identity;
    public CreateNotificationCreateNotificationRequest withIdentity(String[] identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("form:name=Priority")
    public openapisdk.models.shared.NotificationEnumPriorityEnum priority;
    public CreateNotificationCreateNotificationRequest withPriority(openapisdk.models.shared.NotificationEnumPriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=Segment")
    public String[] segment;
    public CreateNotificationCreateNotificationRequest withSegment(String[] segment) {
        this.segment = segment;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sms")
    public Object sms;
    public CreateNotificationCreateNotificationRequest withSms(Object sms) {
        this.sms = sms;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sound")
    public String sound;
    public CreateNotificationCreateNotificationRequest withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @SpeakeasyMetadata("form:name=Tag")
    public String[] tag;
    public CreateNotificationCreateNotificationRequest withTag(String[] tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("form:name=Title")
    public String title;
    public CreateNotificationCreateNotificationRequest withTitle(String title) {
        this.title = title;
        return this;
    }
    @SpeakeasyMetadata("form:name=ToBinding")
    public String[] toBinding;
    public CreateNotificationCreateNotificationRequest withToBinding(String[] toBinding) {
        this.toBinding = toBinding;
        return this;
    }
    @SpeakeasyMetadata("form:name=Ttl")
    public Long ttl;
    public CreateNotificationCreateNotificationRequest withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}