"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleTargetEnum = void 0;
var RuleTargetEnum;
(function (RuleTargetEnum) {
    RuleTargetEnum["SpecialAll"] = "special:all";
    RuleTargetEnum["SpecialAllExceptPolicyServers"] = "special:all_exceptPolicyServers";
    RuleTargetEnum["SpecialAllServersWithRole"] = "special:all_servers_with_role";
    RuleTargetEnum["SpecialAllNodesWithoutRole"] = "special:all_nodes_without_role";
    RuleTargetEnum["PolicyServerDollarPolicyServerId"] = "policyServer:${policyServerId}";
    RuleTargetEnum["GroupDollarNodeGroupId"] = "group:${nodeGroupId}";
})(RuleTargetEnum = exports.RuleTargetEnum || (exports.RuleTargetEnum = {}));
