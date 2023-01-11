package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1DeviceUser
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
public class GoogleAppsCloudidentityDevicesV1DeviceUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compromisedState")
    public GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum compromisedState;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withCompromisedState(GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum compromisedState) {
        this.compromisedState = compromisedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstSyncTime")
    public String firstSyncTime;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withFirstSyncTime(String firstSyncTime) {
        this.firstSyncTime = firstSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managementState")
    public GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum managementState;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withManagementState(GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum managementState) {
        this.managementState = managementState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordState")
    public GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum passwordState;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withPasswordState(GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum passwordState) {
        this.passwordState = passwordState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public GoogleAppsCloudidentityDevicesV1DeviceUser withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}