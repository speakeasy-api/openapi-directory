import { SpeakeasyBase } from "../../../internal/utils";
export declare class RIRInput extends SpeakeasyBase {
    description?: string;
    /**
     * IP space managed by this RIR is considered private
     */
    isPrivate?: boolean;
    name: string;
    slug: string;
}
export declare class Rir extends SpeakeasyBase {
    aggregateCount?: number;
    description?: string;
    id?: number;
    /**
     * IP space managed by this RIR is considered private
     */
    isPrivate?: boolean;
    name: string;
    slug: string;
}
