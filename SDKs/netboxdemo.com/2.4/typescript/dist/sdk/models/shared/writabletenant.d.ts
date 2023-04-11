import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableTenantInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    /**
     * Long-form name (optional)
     */
    description?: string;
    group?: number;
    name: string;
    slug: string;
    tags?: string[];
}
