/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAccountsAccountIdTransactionsRequest extends SpeakeasyBase {
  /**
   * The unique identifier for the account.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountId",
  })
  accountId: string;

  /**
   * The category identifier for which to filter transactions.
   *
   * @remarks
   * Both parent and child categories can be filtered through
   * this parameter. Providing an invalid category identifier
   * results in a `404` response.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter[category]",
  })
  filterCategory?: string;

  /**
   * The start date-time from which to return records,
   *
   * @remarks
   * formatted according to rfc-3339. Not to be used for
   * pagination purposes.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter[since];dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  filterSince?: Date;

  /**
   * The transaction status for which to return records. This
   *
   * @remarks
   * can be used to filter `HELD` transactions from those
   * that are `SETTLED`.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter[status]",
  })
  filterStatus?: shared.TransactionStatusEnumEnum;

  /**
   * A transaction tag to filter for which to return records.
   *
   * @remarks
   * If the tag does not exist, zero records are returned and
   * a success response is given.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter[tag]",
  })
  filterTag?: string;

  /**
   * The end date-time up to which to return records,
   *
   * @remarks
   * formatted according to rfc-3339. Not to be used for
   * pagination purposes.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter[until];dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  filterUntil?: Date;

  /**
   * The number of records to return in each page.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page[size]",
  })
  pageSize?: number;
}

export class GetAccountsAccountIdTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  listTransactionsResponse?: shared.ListTransactionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
