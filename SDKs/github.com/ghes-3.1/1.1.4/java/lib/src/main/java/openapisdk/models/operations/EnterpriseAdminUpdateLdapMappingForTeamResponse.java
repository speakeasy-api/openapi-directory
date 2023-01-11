package openapisdk.models.operations;



public class EnterpriseAdminUpdateLdapMappingForTeamResponse {
    public String contentType;
    public EnterpriseAdminUpdateLdapMappingForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateLdapMappingForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LdapMappingTeam ldapMappingTeam;
    public EnterpriseAdminUpdateLdapMappingForTeamResponse withLdapMappingTeam(openapisdk.models.shared.LdapMappingTeam ldapMappingTeam) {
        this.ldapMappingTeam = ldapMappingTeam;
        return this;
    }
}