import { SpeakeasyBase } from "../../../internal/utils";
/**
 * site details
 */
export declare class Site extends SpeakeasyBase {
    createdAt?: number;
    description?: string;
    excludes?: string;
    id: string;
    name: string;
    permanent?: boolean;
    scope?: string;
    subnets?: Record<string, any>;
    updatedAt?: number;
}
