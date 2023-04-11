import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PolicyRequestActionEnum {
    Deny = "Deny",
    Allow = "Allow"
}
export declare class PolicyRequest extends SpeakeasyBase {
    action?: PolicyRequestActionEnum;
    /**
     * User-friendly policy name
     */
    name: string;
    /**
     * Whether policy applies to resource owner or not
     */
    owner?: boolean;
    /**
     * Policy priority
     */
    priority: number;
    /**
     * List of resources to apply policy to
     */
    resources?: string[];
    /**
     * List of roles to apply policy to
     */
    roles?: string[];
}
