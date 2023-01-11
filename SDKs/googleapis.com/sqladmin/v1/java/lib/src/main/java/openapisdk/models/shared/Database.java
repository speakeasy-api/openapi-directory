package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Database
 * Represents a SQL database on the Cloud SQL instance.
**/
public class Database {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charset")
    public String charset;
    public Database withCharset(String charset) {
        this.charset = charset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collation")
    public String collation;
    public Database withCollation(String collation) {
        this.collation = collation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Database withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public Database withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Database withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Database withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public Database withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Database withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlserverDatabaseDetails")
    public SqlServerDatabaseDetails sqlserverDatabaseDetails;
    public Database withSqlserverDatabaseDetails(SqlServerDatabaseDetails sqlserverDatabaseDetails) {
        this.sqlserverDatabaseDetails = sqlserverDatabaseDetails;
        return this;
    }
}