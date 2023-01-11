package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualMachine
 * Carries information about a Compute Engine VM resource.
**/
public class VirtualMachine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accelerators")
    public Accelerator[] accelerators;
    public VirtualMachine withAccelerators(Accelerator[] accelerators) {
        this.accelerators = accelerators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootDiskSizeGb")
    public Integer bootDiskSizeGb;
    public VirtualMachine withBootDiskSizeGb(Integer bootDiskSizeGb) {
        this.bootDiskSizeGb = bootDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootImage")
    public String bootImage;
    public VirtualMachine withBootImage(String bootImage) {
        this.bootImage = bootImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuPlatform")
    public String cpuPlatform;
    public VirtualMachine withCpuPlatform(String cpuPlatform) {
        this.cpuPlatform = cpuPlatform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public Disk[] disks;
    public VirtualMachine withDisks(Disk[] disks) {
        this.disks = disks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerCacheImages")
    public String[] dockerCacheImages;
    public VirtualMachine withDockerCacheImages(String[] dockerCacheImages) {
        this.dockerCacheImages = dockerCacheImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableStackdriverMonitoring")
    public Boolean enableStackdriverMonitoring;
    public VirtualMachine withEnableStackdriverMonitoring(Boolean enableStackdriverMonitoring) {
        this.enableStackdriverMonitoring = enableStackdriverMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public VirtualMachine withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public VirtualMachine withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public Network network;
    public VirtualMachine withNetwork(Network network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nvidiaDriverVersion")
    public String nvidiaDriverVersion;
    public VirtualMachine withNvidiaDriverVersion(String nvidiaDriverVersion) {
        this.nvidiaDriverVersion = nvidiaDriverVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preemptible")
    public Boolean preemptible;
    public VirtualMachine withPreemptible(Boolean preemptible) {
        this.preemptible = preemptible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservation")
    public String reservation;
    public VirtualMachine withReservation(String reservation) {
        this.reservation = reservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccount serviceAccount;
    public VirtualMachine withServiceAccount(ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public VirtualMachine withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}