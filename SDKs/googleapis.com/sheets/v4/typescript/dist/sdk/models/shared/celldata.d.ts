import { SpeakeasyBase } from "../../../internal/utils";
import { CellFormat } from "./cellformat";
import { DataSourceFormula } from "./datasourceformula";
import { DataSourceTable } from "./datasourcetable";
import { DataValidationRule } from "./datavalidationrule";
import { ExtendedValue } from "./extendedvalue";
import { PivotTable } from "./pivottable";
import { TextFormatRun } from "./textformatrun";
/**
 * Data about a specific cell.
 */
export declare class CellData extends SpeakeasyBase {
    /**
     * A data source formula.
     */
    dataSourceFormula?: DataSourceFormula;
    /**
     * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
     */
    dataSourceTable?: DataSourceTable;
    /**
     * A data validation rule.
     */
    dataValidation?: DataValidationRule;
    /**
     * The format of a cell.
     */
    effectiveFormat?: CellFormat;
    /**
     * The kinds of value that a cell in a spreadsheet can have.
     */
    effectiveValue?: ExtendedValue;
    /**
     * The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.
     */
    formattedValue?: string;
    /**
     * A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell.
     */
    hyperlink?: string;
    /**
     * Any note on the cell.
     */
    note?: string;
    /**
     * A pivot table.
     */
    pivotTable?: PivotTable;
    /**
     * Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased.
     */
    textFormatRuns?: TextFormatRun[];
    /**
     * The format of a cell.
     */
    userEnteredFormat?: CellFormat;
    /**
     * The kinds of value that a cell in a spreadsheet can have.
     */
    userEnteredValue?: ExtendedValue;
}
