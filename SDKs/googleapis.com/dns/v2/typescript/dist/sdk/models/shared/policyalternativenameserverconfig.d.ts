import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAlternativeNameServerConfigTargetNameServer } from "./policyalternativenameserverconfigtargetnameserver";
export declare class PolicyAlternativeNameServerConfig extends SpeakeasyBase {
    kind?: string;
    /**
     * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
     */
    targetNameServers?: PolicyAlternativeNameServerConfigTargetNameServer[];
}
