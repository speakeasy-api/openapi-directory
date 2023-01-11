package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * A Cloud SQL user resource.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dualPasswordType")
    public UserDualPasswordTypeEnum dualPasswordType;
    public User withDualPasswordType(UserDualPasswordTypeEnum dualPasswordType) {
        this.dualPasswordType = dualPasswordType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public User withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public User withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public User withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public User withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public User withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public User withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordPolicy")
    public UserPasswordValidationPolicy passwordPolicy;
    public User withPasswordPolicy(UserPasswordValidationPolicy passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public User withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlserverUserDetails")
    public SqlServerUserDetails sqlserverUserDetails;
    public User withSqlserverUserDetails(SqlServerUserDetails sqlserverUserDetails) {
        this.sqlserverUserDetails = sqlserverUserDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserTypeEnum type;
    public User withType(UserTypeEnum type) {
        this.type = type;
        return this;
    }
}