package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KerberosConfig
 * Specifies Kerberos related configuration.
**/
public class KerberosConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossRealmTrustAdminServer")
    public String crossRealmTrustAdminServer;
    public KerberosConfig withCrossRealmTrustAdminServer(String crossRealmTrustAdminServer) {
        this.crossRealmTrustAdminServer = crossRealmTrustAdminServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossRealmTrustKdc")
    public String crossRealmTrustKdc;
    public KerberosConfig withCrossRealmTrustKdc(String crossRealmTrustKdc) {
        this.crossRealmTrustKdc = crossRealmTrustKdc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossRealmTrustRealm")
    public String crossRealmTrustRealm;
    public KerberosConfig withCrossRealmTrustRealm(String crossRealmTrustRealm) {
        this.crossRealmTrustRealm = crossRealmTrustRealm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crossRealmTrustSharedPasswordUri")
    public String crossRealmTrustSharedPasswordUri;
    public KerberosConfig withCrossRealmTrustSharedPasswordUri(String crossRealmTrustSharedPasswordUri) {
        this.crossRealmTrustSharedPasswordUri = crossRealmTrustSharedPasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableKerberos")
    public Boolean enableKerberos;
    public KerberosConfig withEnableKerberos(Boolean enableKerberos) {
        this.enableKerberos = enableKerberos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kdcDbKeyUri")
    public String kdcDbKeyUri;
    public KerberosConfig withKdcDbKeyUri(String kdcDbKeyUri) {
        this.kdcDbKeyUri = kdcDbKeyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPasswordUri")
    public String keyPasswordUri;
    public KerberosConfig withKeyPasswordUri(String keyPasswordUri) {
        this.keyPasswordUri = keyPasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystorePasswordUri")
    public String keystorePasswordUri;
    public KerberosConfig withKeystorePasswordUri(String keystorePasswordUri) {
        this.keystorePasswordUri = keystorePasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystoreUri")
    public String keystoreUri;
    public KerberosConfig withKeystoreUri(String keystoreUri) {
        this.keystoreUri = keystoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyUri")
    public String kmsKeyUri;
    public KerberosConfig withKmsKeyUri(String kmsKeyUri) {
        this.kmsKeyUri = kmsKeyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realm")
    public String realm;
    public KerberosConfig withRealm(String realm) {
        this.realm = realm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPrincipalPasswordUri")
    public String rootPrincipalPasswordUri;
    public KerberosConfig withRootPrincipalPasswordUri(String rootPrincipalPasswordUri) {
        this.rootPrincipalPasswordUri = rootPrincipalPasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tgtLifetimeHours")
    public Integer tgtLifetimeHours;
    public KerberosConfig withTgtLifetimeHours(Integer tgtLifetimeHours) {
        this.tgtLifetimeHours = tgtLifetimeHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truststorePasswordUri")
    public String truststorePasswordUri;
    public KerberosConfig withTruststorePasswordUri(String truststorePasswordUri) {
        this.truststorePasswordUri = truststorePasswordUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truststoreUri")
    public String truststoreUri;
    public KerberosConfig withTruststoreUri(String truststoreUri) {
        this.truststoreUri = truststoreUri;
        return this;
    }
}