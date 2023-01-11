package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connectivity
 * The ways in which the property provides guests with the ability to access the internet.
**/
public class Connectivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWifi")
    public Boolean freeWifi;
    public Connectivity withFreeWifi(Boolean freeWifi) {
        this.freeWifi = freeWifi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeWifiException")
    public ConnectivityFreeWifiExceptionEnum freeWifiException;
    public Connectivity withFreeWifiException(ConnectivityFreeWifiExceptionEnum freeWifiException) {
        this.freeWifiException = freeWifiException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAreaWifiAvailable")
    public Boolean publicAreaWifiAvailable;
    public Connectivity withPublicAreaWifiAvailable(Boolean publicAreaWifiAvailable) {
        this.publicAreaWifiAvailable = publicAreaWifiAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAreaWifiAvailableException")
    public ConnectivityPublicAreaWifiAvailableExceptionEnum publicAreaWifiAvailableException;
    public Connectivity withPublicAreaWifiAvailableException(ConnectivityPublicAreaWifiAvailableExceptionEnum publicAreaWifiAvailableException) {
        this.publicAreaWifiAvailableException = publicAreaWifiAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicInternetTerminal")
    public Boolean publicInternetTerminal;
    public Connectivity withPublicInternetTerminal(Boolean publicInternetTerminal) {
        this.publicInternetTerminal = publicInternetTerminal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicInternetTerminalException")
    public ConnectivityPublicInternetTerminalExceptionEnum publicInternetTerminalException;
    public Connectivity withPublicInternetTerminalException(ConnectivityPublicInternetTerminalExceptionEnum publicInternetTerminalException) {
        this.publicInternetTerminalException = publicInternetTerminalException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiAvailable")
    public Boolean wifiAvailable;
    public Connectivity withWifiAvailable(Boolean wifiAvailable) {
        this.wifiAvailable = wifiAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wifiAvailableException")
    public ConnectivityWifiAvailableExceptionEnum wifiAvailableException;
    public Connectivity withWifiAvailableException(ConnectivityWifiAvailableExceptionEnum wifiAvailableException) {
        this.wifiAvailableException = wifiAvailableException;
        return this;
    }
}