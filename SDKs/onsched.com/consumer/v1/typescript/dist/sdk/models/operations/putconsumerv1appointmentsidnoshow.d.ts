import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutConsumerV1AppointmentsIdNoshowPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutConsumerV1AppointmentsIdNoshowRequests extends SpeakeasyBase {
    appointmentNoShowModel?: Record<string, any>;
    appointmentNoShowModel1?: Record<string, any>;
    appointmentNoShowModel2?: Record<string, any>;
    appointmentNoShowModel3?: Record<string, any>;
}
export declare class PutConsumerV1AppointmentsIdNoshowRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1AppointmentsIdNoshowPathParams;
    request?: PutConsumerV1AppointmentsIdNoshowRequests;
}
export declare class PutConsumerV1AppointmentsIdNoshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
