import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SegmentDataRequestTypeEnum {
    User = "user",
    Channel = "channel"
}
export declare class SegmentDataRequest extends SpeakeasyBase {
    description?: string;
    filter: Record<string, any>;
    name: string;
    type: SegmentDataRequestTypeEnum;
}
