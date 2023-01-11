package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersCreateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automount")
    public Boolean automount;
    public PostServersCreateServerRequest withAutomount(Boolean automount) {
        this.automount = automount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenter")
    public String datacenter;
    public PostServersCreateServerRequest withDatacenter(String datacenter) {
        this.datacenter = datacenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public PostServersCreateServerRequestFirewalls[] firewalls;
    public PostServersCreateServerRequest withFirewalls(PostServersCreateServerRequestFirewalls[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonProperty("image")
    public String image;
    public PostServersCreateServerRequest withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostServersCreateServerRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PostServersCreateServerRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public Long[] networks;
    public PostServersCreateServerRequest withNetworks(Long[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonProperty("server_type")
    public String serverType;
    public PostServersCreateServerRequest withServerType(String serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_keys")
    public String[] sshKeys;
    public PostServersCreateServerRequest withSshKeys(String[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_after_create")
    public Boolean startAfterCreate;
    public PostServersCreateServerRequest withStartAfterCreate(Boolean startAfterCreate) {
        this.startAfterCreate = startAfterCreate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_data")
    public String userData;
    public PostServersCreateServerRequest withUserData(String userData) {
        this.userData = userData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Long[] volumes;
    public PostServersCreateServerRequest withVolumes(Long[] volumes) {
        this.volumes = volumes;
        return this;
    }
}