import { SpeakeasyBase } from "../../../internal/utils";
export declare class Location extends SpeakeasyBase {
    /**
     * Team ids
     */
    teams: Record<string, string>[];
    /**
     * Tenant id
     */
    tenant: string;
}
