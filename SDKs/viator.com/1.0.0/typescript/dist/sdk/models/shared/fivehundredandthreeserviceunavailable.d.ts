import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FiveHundredAndThreeSERVICEUNAVAILABLECodeEnum {
    ServiceUnavailable = "SERVICE_UNAVAILABLE"
}
export declare enum FiveHundredAndThreeSERVICEUNAVAILABLEMessageEnum {
    InternalServerError = "Internal server error"
}
/**
 * Service Unavailable
 */
export declare class FiveHundredAndThreeSERVICEUNAVAILABLE extends SpeakeasyBase {
    code?: FiveHundredAndThreeSERVICEUNAVAILABLECodeEnum;
    message?: FiveHundredAndThreeSERVICEUNAVAILABLEMessageEnum;
    /**
     * Timestamp of the request
     *
     * @remarks
     * e.g.: `2019-09-17T03:20:45.737043Z`
     *
     */
    timestamp?: string;
    /**
     * Tracking identifier for this error response
     */
    trackingId?: string;
}
