import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMemberRequest extends SpeakeasyBase {
    /**
     * Conversation ID
     */
    conversationId: string;
    /**
     * Member ID
     */
    memberId: string;
}
/**
 * Retrieve member payload
 */
export declare class GetMember200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a member included in Conversation API
     */
    href?: string;
    /**
     * Member ID
     */
    id?: string;
}
export declare class GetMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Retrieve member payload
     */
    getMember200ApplicationJSONObject?: GetMember200ApplicationJSON;
}
