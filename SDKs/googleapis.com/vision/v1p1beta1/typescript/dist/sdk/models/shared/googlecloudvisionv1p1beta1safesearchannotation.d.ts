import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
 */
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Likelihood that this is a medical image.
 */
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
 */
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
 */
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Likelihood that this image contains violent content.
 */
export declare enum GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum {
    Unknown = "UNKNOWN",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
 */
export declare class GoogleCloudVisionV1p1beta1SafeSearchAnnotation extends SpeakeasyBase {
    /**
     * Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
     */
    adult?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum;
    /**
     * Likelihood that this is a medical image.
     */
    medical?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum;
    /**
     * Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
     */
    racy?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum;
    /**
     * Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
     */
    spoof?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum;
    /**
     * Likelihood that this image contains violent content.
     */
    violence?: GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum;
}
