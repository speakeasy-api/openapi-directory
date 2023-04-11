import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
export declare class CallerId extends SpeakeasyBase {
    /**
     * The account of the person calling
     */
    accountName?: string;
    /**
     * The name of the person calling
     */
    displayName?: string;
    person?: EmbeddedResource;
    /**
     * The title of the person calling
     */
    title?: string;
}
