import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { TimeSegment } from "./timesegment";
/**
 * Contains annotation details specific to video classification.
 */
export declare class VideoClassificationAnnotation extends SpeakeasyBase {
    /**
     * Contains annotation details specific to classification.
     */
    classificationAnnotation?: ClassificationAnnotation;
    /**
     * A time period inside of an example that has a time dimension (e.g. video).
     */
    timeSegment?: TimeSegment;
    /**
     * Output only. Expresses the type of video classification. Possible values: * `segment` - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * `shot`- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * `1s_interval` - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality.
     */
    type?: string;
}
