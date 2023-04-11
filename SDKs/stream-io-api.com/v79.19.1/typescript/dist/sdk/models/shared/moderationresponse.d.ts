import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModerationResponse extends SpeakeasyBase {
    action: string;
    explicit: number;
    spam: number;
    toxic: number;
}
