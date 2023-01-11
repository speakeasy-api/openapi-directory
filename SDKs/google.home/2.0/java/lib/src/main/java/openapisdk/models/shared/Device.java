package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Device {
    @JsonProperty("bond_date")
    public Double bondDate;
    public Device withBondDate(Double bondDate) {
        this.bondDate = bondDate;
        return this;
    }
    @JsonProperty("device_class")
    public Integer deviceClass;
    public Device withDeviceClass(Integer deviceClass) {
        this.deviceClass = deviceClass;
        return this;
    }
    @JsonProperty("device_type")
    public Integer deviceType;
    public Device withDeviceType(Integer deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("last_connect_date")
    public Integer lastConnectDate;
    public Device withLastConnectDate(Integer lastConnectDate) {
        this.lastConnectDate = lastConnectDate;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public Device withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Device withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rssi")
    public Integer rssi;
    public Device withRssi(Integer rssi) {
        this.rssi = rssi;
        return this;
    }
    @JsonProperty("service_uuids")
    public String[] serviceUuids;
    public Device withServiceUuids(String[] serviceUuids) {
        this.serviceUuids = serviceUuids;
        return this;
    }
}