package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Package
 * Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
**/
public class Package {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredState")
    public PackageDesiredStateEnum desiredState;
    public Package withDesiredState(PackageDesiredStateEnum desiredState) {
        this.desiredState = desiredState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public PackageManagerEnum manager;
    public Package withManager(PackageManagerEnum manager) {
        this.manager = manager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Package withName(String name) {
        this.name = name;
        return this;
    }
}