package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosixAccount
 * The POSIX account information associated with a Google account.
**/
public class PosixAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public PosixAccount withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gecos")
    public String gecos;
    public PosixAccount withGecos(String gecos) {
        this.gecos = gecos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public PosixAccount withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeDirectory")
    public String homeDirectory;
    public PosixAccount withHomeDirectory(String homeDirectory) {
        this.homeDirectory = homeDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PosixAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemType")
    public PosixAccountOperatingSystemTypeEnum operatingSystemType;
    public PosixAccount withOperatingSystemType(PosixAccountOperatingSystemTypeEnum operatingSystemType) {
        this.operatingSystemType = operatingSystemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public PosixAccount withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shell")
    public String shell;
    public PosixAccount withShell(String shell) {
        this.shell = shell;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemId")
    public String systemId;
    public PosixAccount withSystemId(String systemId) {
        this.systemId = systemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public PosixAccount withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public PosixAccount withUsername(String username) {
        this.username = username;
        return this;
    }
}