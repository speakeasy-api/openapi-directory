/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAllTransfersRequest extends SpeakeasyBase {
  /**
   * int or array of int (optional)
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  /**
   * (optional) default 10
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  /**
   * (optional) default 0
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=offset",
  })
  offset?: string;

  /**
   * ASC / DESC (optional) default ASC
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  /**
   * string or array of string
   *
   * @remarks
   * "WAITING"/"CREATED"/"FINISHED"/"REJECTED"
   * (optional)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: string;
}

export class GetAllTransfers200ApplicationJSONResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "from_sub_id" })
  fromSubId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "to_sub_id" })
  toSubId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  updatedAt?: string;
}

/**
 * 200
 */
export class GetAllTransfers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata({ elemType: GetAllTransfers200ApplicationJSONResult })
  @Expose({ name: "result" })
  @Type(() => GetAllTransfers200ApplicationJSONResult)
  result?: GetAllTransfers200ApplicationJSONResult[];
}

export class GetAllTransfersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * 200
   */
  @SpeakeasyMetadata()
  getAllTransfers200ApplicationJSONObject?: GetAllTransfers200ApplicationJSON;
}
