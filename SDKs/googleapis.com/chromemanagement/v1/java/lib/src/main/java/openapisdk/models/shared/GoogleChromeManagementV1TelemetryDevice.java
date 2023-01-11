package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1TelemetryDevice
 * Telemetry data collected from a managed device.
**/
public class GoogleChromeManagementV1TelemetryDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioStatusReport")
    public GoogleChromeManagementV1AudioStatusReport[] audioStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withAudioStatusReport(GoogleChromeManagementV1AudioStatusReport[] audioStatusReport) {
        this.audioStatusReport = audioStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryInfo")
    public GoogleChromeManagementV1BatteryInfo[] batteryInfo;
    public GoogleChromeManagementV1TelemetryDevice withBatteryInfo(GoogleChromeManagementV1BatteryInfo[] batteryInfo) {
        this.batteryInfo = batteryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryStatusReport")
    public GoogleChromeManagementV1BatteryStatusReport[] batteryStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withBatteryStatusReport(GoogleChromeManagementV1BatteryStatusReport[] batteryStatusReport) {
        this.batteryStatusReport = batteryStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootPerformanceReport")
    public GoogleChromeManagementV1BootPerformanceReport[] bootPerformanceReport;
    public GoogleChromeManagementV1TelemetryDevice withBootPerformanceReport(GoogleChromeManagementV1BootPerformanceReport[] bootPerformanceReport) {
        this.bootPerformanceReport = bootPerformanceReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuInfo")
    public GoogleChromeManagementV1CpuInfo[] cpuInfo;
    public GoogleChromeManagementV1TelemetryDevice withCpuInfo(GoogleChromeManagementV1CpuInfo[] cpuInfo) {
        this.cpuInfo = cpuInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuStatusReport")
    public GoogleChromeManagementV1CpuStatusReport[] cpuStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withCpuStatusReport(GoogleChromeManagementV1CpuStatusReport[] cpuStatusReport) {
        this.cpuStatusReport = cpuStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleChromeManagementV1TelemetryDevice withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public GoogleChromeManagementV1TelemetryDevice withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphicsInfo")
    public GoogleChromeManagementV1GraphicsInfo graphicsInfo;
    public GoogleChromeManagementV1TelemetryDevice withGraphicsInfo(GoogleChromeManagementV1GraphicsInfo graphicsInfo) {
        this.graphicsInfo = graphicsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphicsStatusReport")
    public GoogleChromeManagementV1GraphicsStatusReport[] graphicsStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withGraphicsStatusReport(GoogleChromeManagementV1GraphicsStatusReport[] graphicsStatusReport) {
        this.graphicsStatusReport = graphicsStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryInfo")
    public GoogleChromeManagementV1MemoryInfo memoryInfo;
    public GoogleChromeManagementV1TelemetryDevice withMemoryInfo(GoogleChromeManagementV1MemoryInfo memoryInfo) {
        this.memoryInfo = memoryInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryStatusReport")
    public GoogleChromeManagementV1MemoryStatusReport[] memoryStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withMemoryStatusReport(GoogleChromeManagementV1MemoryStatusReport[] memoryStatusReport) {
        this.memoryStatusReport = memoryStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleChromeManagementV1TelemetryDevice withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkDiagnosticsReport")
    public GoogleChromeManagementV1NetworkDiagnosticsReport[] networkDiagnosticsReport;
    public GoogleChromeManagementV1TelemetryDevice withNetworkDiagnosticsReport(GoogleChromeManagementV1NetworkDiagnosticsReport[] networkDiagnosticsReport) {
        this.networkDiagnosticsReport = networkDiagnosticsReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInfo")
    public GoogleChromeManagementV1NetworkInfo networkInfo;
    public GoogleChromeManagementV1TelemetryDevice withNetworkInfo(GoogleChromeManagementV1NetworkInfo networkInfo) {
        this.networkInfo = networkInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkStatusReport")
    public GoogleChromeManagementV1NetworkStatusReport[] networkStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withNetworkStatusReport(GoogleChromeManagementV1NetworkStatusReport[] networkStatusReport) {
        this.networkStatusReport = networkStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitId")
    public String orgUnitId;
    public GoogleChromeManagementV1TelemetryDevice withOrgUnitId(String orgUnitId) {
        this.orgUnitId = orgUnitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osUpdateStatus")
    public GoogleChromeManagementV1OsUpdateStatus[] osUpdateStatus;
    public GoogleChromeManagementV1TelemetryDevice withOsUpdateStatus(GoogleChromeManagementV1OsUpdateStatus[] osUpdateStatus) {
        this.osUpdateStatus = osUpdateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleChromeManagementV1TelemetryDevice withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageInfo")
    public GoogleChromeManagementV1StorageInfo storageInfo;
    public GoogleChromeManagementV1TelemetryDevice withStorageInfo(GoogleChromeManagementV1StorageInfo storageInfo) {
        this.storageInfo = storageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageStatusReport")
    public GoogleChromeManagementV1StorageStatusReport[] storageStatusReport;
    public GoogleChromeManagementV1TelemetryDevice withStorageStatusReport(GoogleChromeManagementV1StorageStatusReport[] storageStatusReport) {
        this.storageStatusReport = storageStatusReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thunderboltInfo")
    public GoogleChromeManagementV1ThunderboltInfo[] thunderboltInfo;
    public GoogleChromeManagementV1TelemetryDevice withThunderboltInfo(GoogleChromeManagementV1ThunderboltInfo[] thunderboltInfo) {
        this.thunderboltInfo = thunderboltInfo;
        return this;
    }
}