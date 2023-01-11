package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceUser
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
public class DeviceUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compromisedState")
    public DeviceUserCompromisedStateEnum compromisedState;
    public DeviceUser withCompromisedState(DeviceUserCompromisedStateEnum compromisedState) {
        this.compromisedState = compromisedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public DeviceUser withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstSyncTime")
    public String firstSyncTime;
    public DeviceUser withFirstSyncTime(String firstSyncTime) {
        this.firstSyncTime = firstSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public DeviceUser withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public DeviceUser withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementState")
    public DeviceUserManagementStateEnum managementState;
    public DeviceUser withManagementState(DeviceUserManagementStateEnum managementState) {
        this.managementState = managementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordState")
    public DeviceUserPasswordStateEnum passwordState;
    public DeviceUser withPasswordState(DeviceUserPasswordStateEnum passwordState) {
        this.passwordState = passwordState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public DeviceUser withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public DeviceUser withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}