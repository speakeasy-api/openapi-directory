import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableTenantInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    description?: string;
    group?: number;
    name: string;
    slug: string;
    tags?: string[];
}
