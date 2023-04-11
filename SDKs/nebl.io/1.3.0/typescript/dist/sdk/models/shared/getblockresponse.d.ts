import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing all information on a blockchain block
 */
export declare class GetBlockResponse extends SpeakeasyBase {
    /**
     * Block bits
     */
    bits?: string;
    /**
     * Number of confirmations block has
     */
    confirmations?: number;
    /**
     * Block difficulty
     */
    difficulty?: number;
    /**
     * Block hash
     */
    hash?: string;
    /**
     * Block height
     */
    height?: number;
    /**
     * Merkleroot of block
     */
    merkleroot?: string;
    /**
     * Hash of the next block on the chain
     */
    nextblockhash?: string;
    /**
     * Block nonce
     */
    nonce?: number;
    /**
     * Hash of the previous block on the chain
     */
    previousblockhash?: string;
    /**
     * Number of NEBL awarded in this block
     */
    reward?: number;
    /**
     * Block size in bytes
     */
    size?: number;
    /**
     * Block time relative to epoch
     */
    time?: number;
    /**
     * Array of tx ids in the block
     */
    tx?: string[];
    /**
     * Block version
     */
    version?: number;
}
