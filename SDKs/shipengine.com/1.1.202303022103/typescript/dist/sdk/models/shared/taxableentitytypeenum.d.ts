/**
 * The taxable entity type for this tax item. Valid values include the following
 *
 * @remarks
 *
 * |Value       |Description
 * |:---------  |:-----------------------------------------------------
 * |`shipper`   | The shipper is responsible for this tax.
 * |`recipient` | The recipient of the shipment is responsible for this tax.
 *
 */
export declare enum TaxableEntityTypeEnum {
    Shipper = "shipper",
    Recipient = "recipient"
}
