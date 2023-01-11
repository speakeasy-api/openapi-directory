package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomerViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthdate")
    public String birthdate;
    public CustomerViewModel withBirthdate(String birthdate) {
        this.birthdate = birthdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public CustomerViewModel withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public CustomerViewModel withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public CustomerViewModel withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdOn")
    public String createdOn;
    public CustomerViewModel withCreatedOn(String createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedStatus")
    public Boolean deletedStatus;
    public CustomerViewModel withDeletedStatus(Boolean deletedStatus) {
        this.deletedStatus = deletedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedTime")
    public String deletedTime;
    public CustomerViewModel withDeletedTime(String deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public CustomerViewModel withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CustomerViewModel withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailInfo")
    public Boolean emailInfo;
    public CustomerViewModel withEmailInfo(Boolean emailInfo) {
        this.emailInfo = emailInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailPromotion")
    public Boolean emailPromotion;
    public CustomerViewModel withEmailPromotion(Boolean emailPromotion) {
        this.emailPromotion = emailPromotion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public CustomerViewModel withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public CustomerViewModel withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public CustomerViewModel withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CustomerViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inviteEmailSent")
    public String inviteEmailSent;
    public CustomerViewModel withInviteEmailSent(String inviteEmailSent) {
        this.inviteEmailSent = inviteEmailSent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastVisitDate")
    public String lastVisitDate;
    public CustomerViewModel withLastVisitDate(String lastVisitDate) {
        this.lastVisitDate = lastVisitDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public CustomerViewModel withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public CustomerViewModel withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public CustomerViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public CustomerViewModel withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedBy")
    public String modifiedBy;
    public CustomerViewModel withModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedOn")
    public String modifiedOn;
    public CustomerViewModel withModifiedOn(String modifiedOn) {
        this.modifiedOn = modifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomerViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationType")
    public String notificationType;
    public CustomerViewModel withNotificationType(String notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CustomerViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registeredBy")
    public String registeredBy;
    public CustomerViewModel withRegisteredBy(String registeredBy) {
        this.registeredBy = registeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationDate")
    public String registrationDate;
    public CustomerViewModel withRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public CustomerViewModel withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCustomerId")
    public String stripeCustomerId;
    public CustomerViewModel withStripeCustomerId(String stripeCustomerId) {
        this.stripeCustomerId = stripeCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionId")
    public String subscriptionId;
    public CustomerViewModel withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationDate")
    public String verificationDate;
    public CustomerViewModel withVerificationDate(String verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedBy")
    public String verifiedBy;
    public CustomerViewModel withVerifiedBy(String verifiedBy) {
        this.verifiedBy = verifiedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("welcomeEmailSent")
    public String welcomeEmailSent;
    public CustomerViewModel withWelcomeEmailSent(String welcomeEmailSent) {
        this.welcomeEmailSent = welcomeEmailSent;
        return this;
    }
}