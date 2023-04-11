import { SpeakeasyBase } from "../../../internal/utils";
export declare class Feature extends SpeakeasyBase {
    /**
     * curie formatted id
     */
    id?: string;
    /**
     * is the feature present
     */
    isPresent?: boolean;
    /**
     * curie formatted id
     */
    label?: string;
    /**
     * feature type (only phenotype supported)
     */
    type?: string;
}
