import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSiprecServerList: readonly ["https://api.twilio.com"];
export declare class CreateSiprecSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The http method for the status_callback (one of GET, POST).
 */
export declare enum CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateSiprecCreateSiprecRequest extends SpeakeasyBase {
    /**
     * Unique name used when configuring the connector via Marketplace Add-on.
     */
    connectorName?: string;
    /**
     * The user-specified name of this Siprec, if one was given when the Siprec was created. This may be used to stop the Siprec.
     */
    name?: string;
    /**
     * Parameter name
     */
    parameter1Name?: string;
    /**
     * Parameter value
     */
    parameter1Value?: string;
    /**
     * Parameter name
     */
    parameter10Name?: string;
    /**
     * Parameter value
     */
    parameter10Value?: string;
    /**
     * Parameter name
     */
    parameter11Name?: string;
    /**
     * Parameter value
     */
    parameter11Value?: string;
    /**
     * Parameter name
     */
    parameter12Name?: string;
    /**
     * Parameter value
     */
    parameter12Value?: string;
    /**
     * Parameter name
     */
    parameter13Name?: string;
    /**
     * Parameter value
     */
    parameter13Value?: string;
    /**
     * Parameter name
     */
    parameter14Name?: string;
    /**
     * Parameter value
     */
    parameter14Value?: string;
    /**
     * Parameter name
     */
    parameter15Name?: string;
    /**
     * Parameter value
     */
    parameter15Value?: string;
    /**
     * Parameter name
     */
    parameter16Name?: string;
    /**
     * Parameter value
     */
    parameter16Value?: string;
    /**
     * Parameter name
     */
    parameter17Name?: string;
    /**
     * Parameter value
     */
    parameter17Value?: string;
    /**
     * Parameter name
     */
    parameter18Name?: string;
    /**
     * Parameter value
     */
    parameter18Value?: string;
    /**
     * Parameter name
     */
    parameter19Name?: string;
    /**
     * Parameter value
     */
    parameter19Value?: string;
    /**
     * Parameter name
     */
    parameter2Name?: string;
    /**
     * Parameter value
     */
    parameter2Value?: string;
    /**
     * Parameter name
     */
    parameter20Name?: string;
    /**
     * Parameter value
     */
    parameter20Value?: string;
    /**
     * Parameter name
     */
    parameter21Name?: string;
    /**
     * Parameter value
     */
    parameter21Value?: string;
    /**
     * Parameter name
     */
    parameter22Name?: string;
    /**
     * Parameter value
     */
    parameter22Value?: string;
    /**
     * Parameter name
     */
    parameter23Name?: string;
    /**
     * Parameter value
     */
    parameter23Value?: string;
    /**
     * Parameter name
     */
    parameter24Name?: string;
    /**
     * Parameter value
     */
    parameter24Value?: string;
    /**
     * Parameter name
     */
    parameter25Name?: string;
    /**
     * Parameter value
     */
    parameter25Value?: string;
    /**
     * Parameter name
     */
    parameter26Name?: string;
    /**
     * Parameter value
     */
    parameter26Value?: string;
    /**
     * Parameter name
     */
    parameter27Name?: string;
    /**
     * Parameter value
     */
    parameter27Value?: string;
    /**
     * Parameter name
     */
    parameter28Name?: string;
    /**
     * Parameter value
     */
    parameter28Value?: string;
    /**
     * Parameter name
     */
    parameter29Name?: string;
    /**
     * Parameter value
     */
    parameter29Value?: string;
    /**
     * Parameter name
     */
    parameter3Name?: string;
    /**
     * Parameter value
     */
    parameter3Value?: string;
    /**
     * Parameter name
     */
    parameter30Name?: string;
    /**
     * Parameter value
     */
    parameter30Value?: string;
    /**
     * Parameter name
     */
    parameter31Name?: string;
    /**
     * Parameter value
     */
    parameter31Value?: string;
    /**
     * Parameter name
     */
    parameter32Name?: string;
    /**
     * Parameter value
     */
    parameter32Value?: string;
    /**
     * Parameter name
     */
    parameter33Name?: string;
    /**
     * Parameter value
     */
    parameter33Value?: string;
    /**
     * Parameter name
     */
    parameter34Name?: string;
    /**
     * Parameter value
     */
    parameter34Value?: string;
    /**
     * Parameter name
     */
    parameter35Name?: string;
    /**
     * Parameter value
     */
    parameter35Value?: string;
    /**
     * Parameter name
     */
    parameter36Name?: string;
    /**
     * Parameter value
     */
    parameter36Value?: string;
    /**
     * Parameter name
     */
    parameter37Name?: string;
    /**
     * Parameter value
     */
    parameter37Value?: string;
    /**
     * Parameter name
     */
    parameter38Name?: string;
    /**
     * Parameter value
     */
    parameter38Value?: string;
    /**
     * Parameter name
     */
    parameter39Name?: string;
    /**
     * Parameter value
     */
    parameter39Value?: string;
    /**
     * Parameter name
     */
    parameter4Name?: string;
    /**
     * Parameter value
     */
    parameter4Value?: string;
    /**
     * Parameter name
     */
    parameter40Name?: string;
    /**
     * Parameter value
     */
    parameter40Value?: string;
    /**
     * Parameter name
     */
    parameter41Name?: string;
    /**
     * Parameter value
     */
    parameter41Value?: string;
    /**
     * Parameter name
     */
    parameter42Name?: string;
    /**
     * Parameter value
     */
    parameter42Value?: string;
    /**
     * Parameter name
     */
    parameter43Name?: string;
    /**
     * Parameter value
     */
    parameter43Value?: string;
    /**
     * Parameter name
     */
    parameter44Name?: string;
    /**
     * Parameter value
     */
    parameter44Value?: string;
    /**
     * Parameter name
     */
    parameter45Name?: string;
    /**
     * Parameter value
     */
    parameter45Value?: string;
    /**
     * Parameter name
     */
    parameter46Name?: string;
    /**
     * Parameter value
     */
    parameter46Value?: string;
    /**
     * Parameter name
     */
    parameter47Name?: string;
    /**
     * Parameter value
     */
    parameter47Value?: string;
    /**
     * Parameter name
     */
    parameter48Name?: string;
    /**
     * Parameter value
     */
    parameter48Value?: string;
    /**
     * Parameter name
     */
    parameter49Name?: string;
    /**
     * Parameter value
     */
    parameter49Value?: string;
    /**
     * Parameter name
     */
    parameter5Name?: string;
    /**
     * Parameter value
     */
    parameter5Value?: string;
    /**
     * Parameter name
     */
    parameter50Name?: string;
    /**
     * Parameter value
     */
    parameter50Value?: string;
    /**
     * Parameter name
     */
    parameter51Name?: string;
    /**
     * Parameter value
     */
    parameter51Value?: string;
    /**
     * Parameter name
     */
    parameter52Name?: string;
    /**
     * Parameter value
     */
    parameter52Value?: string;
    /**
     * Parameter name
     */
    parameter53Name?: string;
    /**
     * Parameter value
     */
    parameter53Value?: string;
    /**
     * Parameter name
     */
    parameter54Name?: string;
    /**
     * Parameter value
     */
    parameter54Value?: string;
    /**
     * Parameter name
     */
    parameter55Name?: string;
    /**
     * Parameter value
     */
    parameter55Value?: string;
    /**
     * Parameter name
     */
    parameter56Name?: string;
    /**
     * Parameter value
     */
    parameter56Value?: string;
    /**
     * Parameter name
     */
    parameter57Name?: string;
    /**
     * Parameter value
     */
    parameter57Value?: string;
    /**
     * Parameter name
     */
    parameter58Name?: string;
    /**
     * Parameter value
     */
    parameter58Value?: string;
    /**
     * Parameter name
     */
    parameter59Name?: string;
    /**
     * Parameter value
     */
    parameter59Value?: string;
    /**
     * Parameter name
     */
    parameter6Name?: string;
    /**
     * Parameter value
     */
    parameter6Value?: string;
    /**
     * Parameter name
     */
    parameter60Name?: string;
    /**
     * Parameter value
     */
    parameter60Value?: string;
    /**
     * Parameter name
     */
    parameter61Name?: string;
    /**
     * Parameter value
     */
    parameter61Value?: string;
    /**
     * Parameter name
     */
    parameter62Name?: string;
    /**
     * Parameter value
     */
    parameter62Value?: string;
    /**
     * Parameter name
     */
    parameter63Name?: string;
    /**
     * Parameter value
     */
    parameter63Value?: string;
    /**
     * Parameter name
     */
    parameter64Name?: string;
    /**
     * Parameter value
     */
    parameter64Value?: string;
    /**
     * Parameter name
     */
    parameter65Name?: string;
    /**
     * Parameter value
     */
    parameter65Value?: string;
    /**
     * Parameter name
     */
    parameter66Name?: string;
    /**
     * Parameter value
     */
    parameter66Value?: string;
    /**
     * Parameter name
     */
    parameter67Name?: string;
    /**
     * Parameter value
     */
    parameter67Value?: string;
    /**
     * Parameter name
     */
    parameter68Name?: string;
    /**
     * Parameter value
     */
    parameter68Value?: string;
    /**
     * Parameter name
     */
    parameter69Name?: string;
    /**
     * Parameter value
     */
    parameter69Value?: string;
    /**
     * Parameter name
     */
    parameter7Name?: string;
    /**
     * Parameter value
     */
    parameter7Value?: string;
    /**
     * Parameter name
     */
    parameter70Name?: string;
    /**
     * Parameter value
     */
    parameter70Value?: string;
    /**
     * Parameter name
     */
    parameter71Name?: string;
    /**
     * Parameter value
     */
    parameter71Value?: string;
    /**
     * Parameter name
     */
    parameter72Name?: string;
    /**
     * Parameter value
     */
    parameter72Value?: string;
    /**
     * Parameter name
     */
    parameter73Name?: string;
    /**
     * Parameter value
     */
    parameter73Value?: string;
    /**
     * Parameter name
     */
    parameter74Name?: string;
    /**
     * Parameter value
     */
    parameter74Value?: string;
    /**
     * Parameter name
     */
    parameter75Name?: string;
    /**
     * Parameter value
     */
    parameter75Value?: string;
    /**
     * Parameter name
     */
    parameter76Name?: string;
    /**
     * Parameter value
     */
    parameter76Value?: string;
    /**
     * Parameter name
     */
    parameter77Name?: string;
    /**
     * Parameter value
     */
    parameter77Value?: string;
    /**
     * Parameter name
     */
    parameter78Name?: string;
    /**
     * Parameter value
     */
    parameter78Value?: string;
    /**
     * Parameter name
     */
    parameter79Name?: string;
    /**
     * Parameter value
     */
    parameter79Value?: string;
    /**
     * Parameter name
     */
    parameter8Name?: string;
    /**
     * Parameter value
     */
    parameter8Value?: string;
    /**
     * Parameter name
     */
    parameter80Name?: string;
    /**
     * Parameter value
     */
    parameter80Value?: string;
    /**
     * Parameter name
     */
    parameter81Name?: string;
    /**
     * Parameter value
     */
    parameter81Value?: string;
    /**
     * Parameter name
     */
    parameter82Name?: string;
    /**
     * Parameter value
     */
    parameter82Value?: string;
    /**
     * Parameter name
     */
    parameter83Name?: string;
    /**
     * Parameter value
     */
    parameter83Value?: string;
    /**
     * Parameter name
     */
    parameter84Name?: string;
    /**
     * Parameter value
     */
    parameter84Value?: string;
    /**
     * Parameter name
     */
    parameter85Name?: string;
    /**
     * Parameter value
     */
    parameter85Value?: string;
    /**
     * Parameter name
     */
    parameter86Name?: string;
    /**
     * Parameter value
     */
    parameter86Value?: string;
    /**
     * Parameter name
     */
    parameter87Name?: string;
    /**
     * Parameter value
     */
    parameter87Value?: string;
    /**
     * Parameter name
     */
    parameter88Name?: string;
    /**
     * Parameter value
     */
    parameter88Value?: string;
    /**
     * Parameter name
     */
    parameter89Name?: string;
    /**
     * Parameter value
     */
    parameter89Value?: string;
    /**
     * Parameter name
     */
    parameter9Name?: string;
    /**
     * Parameter value
     */
    parameter9Value?: string;
    /**
     * Parameter name
     */
    parameter90Name?: string;
    /**
     * Parameter value
     */
    parameter90Value?: string;
    /**
     * Parameter name
     */
    parameter91Name?: string;
    /**
     * Parameter value
     */
    parameter91Value?: string;
    /**
     * Parameter name
     */
    parameter92Name?: string;
    /**
     * Parameter value
     */
    parameter92Value?: string;
    /**
     * Parameter name
     */
    parameter93Name?: string;
    /**
     * Parameter value
     */
    parameter93Value?: string;
    /**
     * Parameter name
     */
    parameter94Name?: string;
    /**
     * Parameter value
     */
    parameter94Value?: string;
    /**
     * Parameter name
     */
    parameter95Name?: string;
    /**
     * Parameter value
     */
    parameter95Value?: string;
    /**
     * Parameter name
     */
    parameter96Name?: string;
    /**
     * Parameter value
     */
    parameter96Value?: string;
    /**
     * Parameter name
     */
    parameter97Name?: string;
    /**
     * Parameter value
     */
    parameter97Value?: string;
    /**
     * Parameter name
     */
    parameter98Name?: string;
    /**
     * Parameter value
     */
    parameter98Value?: string;
    /**
     * Parameter name
     */
    parameter99Name?: string;
    /**
     * Parameter value
     */
    parameter99Value?: string;
    /**
     * Absolute URL of the status callback.
     */
    statusCallback?: string;
    /**
     * The http method for the status_callback (one of GET, POST).
     */
    statusCallbackMethod?: CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum;
    track?: shared.SiprecEnumTrackEnum;
}
export declare class CreateSiprecRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource is associated with.
     */
    callSid: string;
    requestBody?: CreateSiprecCreateSiprecRequest;
}
export declare class CreateSiprecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountCallSiprec?: shared.ApiV2010AccountCallSiprec;
}
