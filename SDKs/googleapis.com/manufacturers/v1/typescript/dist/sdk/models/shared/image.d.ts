import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the image. @OutputOnly
 */
export declare enum ImageStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingProcessing = "PENDING_PROCESSING",
    PendingCrawl = "PENDING_CRAWL",
    Ok = "OK",
    Roboted = "ROBOTED",
    Xroboted = "XROBOTED",
    CrawlError = "CRAWL_ERROR",
    ProcessingError = "PROCESSING_ERROR",
    DecodingError = "DECODING_ERROR",
    TooBig = "TOO_BIG",
    CrawlSkipped = "CRAWL_SKIPPED",
    Hostloaded = "HOSTLOADED",
    Http404 = "HTTP_404"
}
/**
 * The type of the image, i.e., crawled or uploaded. @OutputOnly
 */
export declare enum ImageTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Crawled = "CRAWLED",
    Uploaded = "UPLOADED"
}
/**
 * An image.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully.
     */
    imageUrl?: string;
    /**
     * The status of the image. @OutputOnly
     */
    status?: ImageStatusEnum;
    /**
     * The type of the image, i.e., crawled or uploaded. @OutputOnly
     */
    type?: ImageTypeEnum;
}
