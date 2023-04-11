import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
 */
export declare class MethodMap extends SpeakeasyBase {
    /**
     * The action identifier for the create method to be used for this collection
     */
    create?: string;
    /**
     * The action identifier for the delete method to be used for this collection
     */
    delete?: string;
    /**
     * The action identifier for the get method to be used for this collection
     */
    get?: string;
    /**
     * The action identifier for the setIamPolicy method to be used for this collection
     */
    setIamPolicy?: string;
    /**
     * The action identifier for the update method to be used for this collection
     */
    update?: string;
}
