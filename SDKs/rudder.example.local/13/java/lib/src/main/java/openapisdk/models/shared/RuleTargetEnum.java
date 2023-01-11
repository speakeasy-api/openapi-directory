package openapisdk.models.shared;


public enum RuleTargetEnum {
    SPECIAL_ALL("special:all"),
    SPECIAL_ALL_EXCEPT_POLICY_SERVERS("special:all_exceptPolicyServers"),
    SPECIAL_ALL_SERVERS_WITH_ROLE("special:all_servers_with_role"),
    SPECIAL_ALL_NODES_WITHOUT_ROLE("special:all_nodes_without_role"),
    POLICY_SERVER_DOLLAR_POLICY_SERVER_ID("policyServer:${policyServerId}"),
    GROUP_DOLLAR_NODE_GROUP_ID("group:${nodeGroupId}");

    public final String value;

    private RuleTargetEnum(String value) {
        this.value = value;
    }
}
