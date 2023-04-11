import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Available plans
 */
export declare class APIClassifierTaxonomyOut extends SpeakeasyBase {
    /**
     * Name of the classifier as per apiStatus (corresponds also to the name of the service in apiServices)
     */
    classifierName?: string;
    /**
     * The scripts / alphabets this classifiers classifies to
     */
    classifyingScripts?: string[];
    /**
     * The taxonomy classes this classifier classifies to
     */
    taxonomyClasses?: string[];
}
