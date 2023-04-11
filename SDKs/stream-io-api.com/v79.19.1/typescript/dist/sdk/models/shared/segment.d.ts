import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SegmentTypeEnum {
    User = "user",
    Channel = "channel"
}
export declare class Segment extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    filter: Record<string, any>;
    id: string;
    inUse: boolean;
    name: string;
    size: number;
    status: string;
    type: SegmentTypeEnum;
    updatedAt: Date;
}
