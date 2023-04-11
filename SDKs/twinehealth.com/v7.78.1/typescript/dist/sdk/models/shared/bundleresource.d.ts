import { SpeakeasyBase } from "../../../internal/utils";
export declare class BundleResourceAttributes extends SpeakeasyBase {
    thread?: string;
    effectiveFrom: string;
    effectiveTo?: string;
    title: string;
    type: string;
}
export declare class BundleResourceRelationshipsActionsData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class BundleResourceRelationshipsActions extends SpeakeasyBase {
    data?: BundleResourceRelationshipsActionsData;
    links?: Record<string, any>;
}
export declare class BundleResourceRelationshipsPlanData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class BundleResourceRelationshipsPlan extends SpeakeasyBase {
    data?: BundleResourceRelationshipsPlanData;
    links?: Record<string, any>;
}
export declare class BundleResourceRelationships extends SpeakeasyBase {
    actions?: BundleResourceRelationshipsActions;
    plan?: BundleResourceRelationshipsPlan;
}
export declare class BundleResource extends SpeakeasyBase {
    attributes?: BundleResourceAttributes;
    id: string;
    relationships?: BundleResourceRelationships;
    type: string;
}
